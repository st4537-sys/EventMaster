const Reservation = require('../models/Reservation');
const Event = require('../models/Event');

const createReservation = async (req, res) => {
  try {
    const { idEvent, seats } = req.body;
    const idUser = req.user.id;

    if (!idEvent || !seats) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (seats <= 0) {
      return res.status(400).json({ message: 'Seats must be greater than 0' });
    }

    const event = await Event.findById(idEvent);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.status !== 'active') {
      return res.status(400).json({ message: 'Event not active' });
    }

    if (event.availableSeats < seats) {
      return res.status(409).json({ message: 'No capacity' });
    }

    const reservation = await Reservation.create({
      idUser,
      idEvent,
      seats
    });

    event.reservedSeats += seats;
    event.availableSeats -= seats;

    await event.save();

    res.status(201).json({
      message: 'Reservation created successfully',
      reservation
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const cancelReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id);

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    if (reservation.status === 'cancelled') {
      return res.status(400).json({ message: 'Reservation already cancelled' });
    }

    const event = await Event.findById(reservation.idEvent);

    reservation.status = 'cancelled';
    await reservation.save();

    if (event) {
      event.reservedSeats -= reservation.seats;
      event.availableSeats += reservation.seats;
      await event.save();
    }

    res.json({ message: 'Reservation canceled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getMyReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ idUser: req.user.id })
      .populate('idEvent')
      .sort({ createdAt: -1 });

    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createReservation,
  cancelReservation,
  getMyReservations
};