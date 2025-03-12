const Booking = require('../models/Booking');
const ParkingSpace = require('../models/ParkingSpace');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// @desc    Create a booking
// @route   POST /api/bookings
// @access  Private/Driver
const createBooking = async (req, res) => {
  try {
    const { parkingSpaceId, startTime, endTime, vehicle } = req.body;

    const parkingSpace = await ParkingSpace.findById(parkingSpaceId);
    if (!parkingSpace) {
      return res.status(404).json({ message: 'Parking space not found' });
    }

    if (parkingSpace.availableSpots < 1) {
      return res.status(400).json({ message: 'No available spots' });
    }

    // Calculate total hours and amount
    const hours = Math.ceil((new Date(endTime) - new Date(startTime)) / (1000 * 60 * 60));
    const totalAmount = hours * parkingSpace.pricePerHour;

    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount * 100, // Stripe expects amount in cents
      currency: 'usd',
    });

    const booking = await Booking.create({
      user: req.user._id,
      parkingSpace: parkingSpaceId,
      vehicle,
      startTime,
      endTime,
      totalAmount,
      paymentId: paymentIntent.id
    });

    // Update available spots
    await ParkingSpace.findByIdAndUpdate(parkingSpaceId, {
      $inc: { availableSpots: -1 }
    });

    res.status(201).json({
      booking,
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user bookings
// @route   GET /api/bookings
// @access  Private/Driver
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate('parkingSpace', 'name location')
      .sort('-createdAt');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get manager's parking space bookings
// @route   GET /api/bookings/manager
// @access  Private/Manager
const getManagerBookings = async (req, res) => {
  try {
    const parkingSpaces = await ParkingSpace.find({ manager: req.user._id });
    const parkingSpaceIds = parkingSpaces.map(space => space._id);

    const bookings = await Booking.find({
      parkingSpace: { $in: parkingSpaceIds }
    })
      .populate('user', 'name email')
      .populate('parkingSpace', 'name location')
      .sort('-createdAt');

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Private
const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.status = status;
    if (status === 'completed' || status === 'cancelled') {
      // Update available spots if booking is completed or cancelled
      await ParkingSpace.findByIdAndUpdate(booking.parkingSpace, {
        $inc: { availableSpots: 1 }
      });
    }

    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
  getManagerBookings,
  updateBookingStatus,
};
