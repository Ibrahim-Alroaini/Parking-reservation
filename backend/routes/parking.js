const express = require('express');
const router = express.Router();
const {
  createParkingSpace,
  getParkingSpaces,
  getManagerParkingSpaces,
  updateParkingSpace,
} = require('../controllers/parkingController');
const { protect, manager } = require('../middleware/auth');

router.route('/')
  .get(getParkingSpaces)
  .post(protect, manager, createParkingSpace);

router.get('/manager', protect, manager, getManagerParkingSpaces);
router.put('/:id', protect, manager, updateParkingSpace);

module.exports = router;
