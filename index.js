
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 3000;
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://tharunkumarva:Atlas123123@cluster0.6rwnhir.mongodb.net/successonfly', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// User Schema and Model
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model('User', userSchema);

// Booked Flight Schema and Model
const bookedFlightSchema = new mongoose.Schema({
  airline: String,
  flight_number: String,
  departure: {
    location: String,
    date_time: String,
  },
  arrival: {
    location: String,
    date_time: String,
  },
  classSelection: String,
  userEmail: String, // Ensure this field is included
  bookingDate: { type: Date, default: Date.now },
  price: Number,
});

const BookedFlight = mongoose.model('BookedFlight', bookedFlightSchema);

// Flight Schema
const flightSchema = new mongoose.Schema({
  flight_number: String,
  airline: String,
  departure: {
    location: String,
    date_time: String,
  },
  arrival: {
    location: String,
    date_time: String,
  },
  class_availability: {
    Business: {
      remaining_seats: Number,
      price: Number,
    },
    Economy: {
      remaining_seats: Number,
      price: Number,
    },
  },
}, { collection: "flightsavilables" });

const FlightModel = mongoose.model('flightsavilables', flightSchema);

// Routes
app.post('/api/users', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const newUser = new UserModel({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username, password });

    if (user) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/check-flights', async (req, res) => {
  const { startLocation, endLocation, startDate, endDate, adults, children, infants, selectedClass } = req.body;

  try {
    const availableFlights = await FlightModel.find({
      'departure.location': startLocation,
      'arrival.location': endLocation,
    });

    console.log('Available Flights:', availableFlights);

    res.status(200).json({ availableFlights });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/book-flight', async (req, res) => {
  try {
    console.log('Received booking request:', req.body);

    const { flight, classSelection, numAdults, numChildren, departureDate } = req.body;
    const userEmail = req.body.userEmail; // Get userEmail from the request body

    console.log('Booking flight for user:', userEmail);

    // Instead of calling flight.save(), instantiate it as a Mongoose model
    const bookedFlight = new BookedFlight({
      airline: flight.airline,
      flight_number: flight.flight_number,
      departure: flight.departure,
      arrival: flight.arrival,
      classSelection,
      userEmail,
      bookingDate: new Date(),
      price: flight.class_availability[classSelection].price,
    });

    // Save the booked flight
    await bookedFlight.save();

    console.log('Flight booked successfully:', bookedFlight);

    res.status(200).json({ message: 'Booking successful', bookedFlight });
  } catch (error) {
    console.error('Error booking flight:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





app.get('/api/get-all-flights', async (req, res) => {
  try {
    const allFlights = await FlightModel.find();
    res.status(200).json({ availableFlights: allFlights });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/get-user-orders', async (req, res) => {
  const { userEmail } = req.query;

  try {
    const userOrders = await BookedFlight.find({ userEmail });
    res.status(200).json({ orders: userOrders });
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Add this route to your backend app.js or index.js

app.delete('/api/cancel-booking/:orderId', async (req, res) => {
  const { orderId } = req.params;

  try {
    // Delete the order from the database
    await BookedFlight.findByIdAndDelete(orderId);
    res.status(200).json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});