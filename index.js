

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 3000;
app.use(bodyParser.json());

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://tharunkumarva:Atlas123123@cluster0.6rwnhir.mongodb.net/successonfly', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Schema and Model setup
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model('User', userSchema);

// Define the BookedFlight model
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
  userEmail: String,
  bookingDate: { type: Date, default: Date.now },
  price: Number,
});

const BookedFlight = mongoose.model('BookedFlight', bookedFlightSchema);

// Register route
app.post('/api/users', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user
    const newUser = new UserModel({ username, password });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user with the provided credentials exists in the database
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

// Flight schema
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

// Check flights route
app.post('/api/check-flights', async (req, res) => {
  const { startLocation, endLocation, startDate, endDate, adults, children, infants, selectedClass } = req.body;

  try {
    // Query the database for available flights based on user input
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


// app.post('/api/book-flight', async (req, res) => {
//   try {
//     const { flight, classSelection, numAdults, numChildren, departureDate } = req.body;

//     // Assuming you have a BookedFlight model
//     const bookedFlight = new BookedFlight({
//       airline: flight.airline,
//       flight_number: flight.flight_number,
//       departure: flight.departure,
//       arrival: flight.arrival,
//       classSelection,
//       numAdults,
//       numChildren,
//       departureDate,
//     });

//     await bookedFlight.save();

//     res.status(200).json({ message: 'Booking successful', bookedFlight });
//   } catch (error) {
//     console.error('Error booking flight:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


app.post('/api/book-flight', async (req, res) => {
  try {
    const { flight, classSelection, numAdults, numChildren, departureDate, userEmail } = req.body;

    // Check if the user is logged in
    if (!userEmail) {
      return res.status(401).json({ error: 'User not logged in' });
    }

    // Assuming you have a BookedFlight model
    const bookedFlight = new BookedFlight({
      airline: flight.airline,
      flight_number: flight.flight_number,
      departure: flight.departure,
      arrival: flight.arrival,
      classSelection,
      numAdults,
      numChildren,
      departureDate,
      userEmail, // Include the user's email in the booking
    });

    await bookedFlight.save();

    res.status(200).json({ message: 'Booking successful', bookedFlight });
  } catch (error) {
    console.error('Error booking flight:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




// Existing routes and server setup




// Fetch all flights route
app.get('/api/get-all-flights', async (req, res) => {
  try {
    // Query the database to retrieve all flights
    const allFlights = await FlightModel.find();

    // Send the retrieved flights as a response
    res.status(200).json({ availableFlights: allFlights });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Fetch user orders route
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
  



app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});






