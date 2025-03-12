const mongoose = require('mongoose');

const parkingSpaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  totalSpots: {
    type: Number,
    required: true
  },
  availableSpots: {
    type: Number,
    required: true
  },
  pricePerHour: {
    type: Number,
    required: true
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  operatingHours: {
    open: String,
    close: String
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'maintenance'],
    default: 'active'
  }
});

const ParkingSpace = mongoose.model('ParkingSpace', parkingSpaceSchema);
module.exports = ParkingSpace;
