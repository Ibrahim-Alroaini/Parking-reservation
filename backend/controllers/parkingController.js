const ParkingSpace = require('../models/ParkingSpace');

// @desc    Create a parking space
// @route   POST /api/parking
// @access  Private/Manager
const createParkingSpace = async (req, res) => {
  try {
    const {
      name,
      location,
      totalSpots,
      pricePerHour,
      operatingHours
    } = req.body;

    const parkingSpace = await ParkingSpace.create({
      name,
      location,
      totalSpots,
      availableSpots: totalSpots,
      pricePerHour,
      operatingHours,
      manager: req.user._id
    });

    res.status(201).json(parkingSpace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all parking spaces
// @route   GET /api/parking
// @access  Public
const getParkingSpaces = async (req, res) => {
  try {
    const parkingSpaces = await ParkingSpace.find({ status: 'active' });
    res.json(parkingSpaces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get manager's parking spaces
// @route   GET /api/parking/manager
// @access  Private/Manager
const getManagerParkingSpaces = async (req, res) => {
  try {
    const parkingSpaces = await ParkingSpace.find({ manager: req.user._id });
    res.json(parkingSpaces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update parking space
// @route   PUT /api/parking/:id
// @access  Private/Manager
const updateParkingSpace = async (req, res) => {
  try {
    const parkingSpace = await ParkingSpace.findById(req.params.id);

    if (!parkingSpace) {
      return res.status(404).json({ message: 'Parking space not found' });
    }

    if (parkingSpace.manager.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedSpace = await ParkingSpace.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedSpace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createParkingSpace,
  getParkingSpaces,
  getManagerParkingSpaces,
  updateParkingSpace,
};
