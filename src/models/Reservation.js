const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    idEvent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true
    },
    seats: {
      type: Number,
      required: true,
      min: 1
    },
    status: {
      type: String,
      enum: ['active', 'cancelled'],
      default: 'active'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Reservation', reservationSchema);