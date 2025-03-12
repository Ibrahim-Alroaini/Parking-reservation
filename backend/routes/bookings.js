const express = require('express');
const router = express.Router();
const {
  createBooking,
  getUserBookings,
  getManagerBookings,
  updateBookingStatus,
} = require('../controllers/bookingController');
const { protect, driver, manager } = require('../middleware/auth');

router.route('/')
  .post(protect, driver, createBooking)
  .get(protect, driver, getUserBookings);

router.get('/manager', protect, manager, getManagerBookings);
router.put('/:id', protect, updateBookingStatus);

module.exports = router;
