const Event = require('../models/Event');

const createEvent = async (req, res) => {
  try {
    const { name, description, date, location, capacity } = req.body;

    if (!name || !date || !location || !capacity) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingEvent = await Event.findOne({ name, date, location });

    if (existingEvent) {
      return res.status(409).json({ message: 'Event already exists' });
    }

    const event = await Event.create({
      name,
      description,
      date,
      location,
      capacity,
      reservedSeats: 0,
      availableSeats: capacity
    });

    res.status(201).json({
      message: 'Event created successfully',
      event
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, date, location, capacity, status } = req.body;

    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (capacity && capacity < event.reservedSeats) {
      return res.status(400).json({
        message: 'Capacity cannot be less than reserved seats'
      });
    }

    event.name = name ?? event.name;
    event.description = description ?? event.description;
    event.date = date ?? event.date;
    event.location = location ?? event.location;
    event.capacity = capacity ?? event.capacity;
    event.status = status ?? event.status;
    event.availableSeats = event.capacity - event.reservedSeats;

    await event.save();

    res.json({
      message: 'Event updated successfully',
      event
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    await Event.findByIdAndDelete(id);

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent
};