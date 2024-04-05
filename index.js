// // // const express = require('express');
// // // const app = express();
// // // const bodyParser = require('body-parser');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');

// // // const port = 3000;
// // // app.use(bodyParser.json());

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());


// // // mongoose.connect('mongodb+srv://tharunkumarva:Atlas123123@cluster0.6rwnhir.mongodb.net/successonfly', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // });
// // // mongoose.connection.on('connected', () => {
// // //     console.log('Connected to MongoDB');
// // //   });


// // //   // Schema and Model setup
// // // const userSchema = new mongoose.Schema({
// // //     username: { type: String, unique: true, required: true },
// // //     password: { type: String, required: true },
// // //   });
  
// // //   const UserModel = mongoose.model('User', userSchema);
  
// // //   // Register route
// // //   app.post('/api/users', async (req, res) => {
// // //     const { username, password } = req.body;
  
// // //     try {
// // //       // Check if the username already exists
// // //       const existingUser = await UserModel.findOne({ username });
  
// // //       if (existingUser) {
// // //         return res.status(400).json({ error: 'Username already exists' });
// // //       }
  
// // //       // Create a new user
// // //       const newUser = new UserModel({ username, password });
      
// // //       // Save the new user to the database
// // //       await newUser.save();
  
// // //       res.status(201).json({ message: 'User registered successfully', user: newUser });
// // //     } catch (error) {
// // //       console.error(error);
// // //       res.status(500).json({ error: 'Internal server error' });
// // //     }
// // //   });
  
// // //   // Login route
// // //   app.post('/api/login', async (req, res) => {
// // //     const { username, password } = req.body;
  
// // //     try {
// // //       // Check if the user with the provided credentials exists in the database
// // //       const user = await UserModel.findOne({ username, password });
  
// // //       if (user) {
// // //         res.status(200).json({ message: 'Login successful', user });
// // //       } else {
// // //         res.status(401).json({ error: 'Invalid credentials' });
// // //       }
// // //     } catch (error) {
// // //       console.error(error);
// // //       res.status(500).json({ error: 'Internal server error' });
// // //     }
// // //   });
  
// // //   //End


// // //   const flightSchema = new mongoose.Schema({
// // //     flight_number: String,
// // //     airline: String,
// // //     departure: {
// // //         location: String,
// // //         date_time: String,
// // //     },
// // //     arrival: {
// // //         location: String,
// // //         date_time: String,
// // //     },
// // //     class_availability: {
// // //         Business: {
// // //             remaining_seats: Number,
// // //             price: Number,
// // //         },
// // //         Economy: {
// // //             remaining_seats: Number,
// // //             price: Number,
// // //         },
// // //     },

// // // }, {collection:"flightsavilables"});

// // // const FlightModel = mongoose.model('flightsavilables', flightSchema);

// // // // Define a route to handle flight availability based on user input
// // // app.post('//api/check-flights', async (req, res) => {
// // //     const { startLocation, endLocation, startDate, endDate, adults, children, infants, selectedClass } = req.body;

// // //     try {

// // //       // console.log(startLocation,endLocation,startDate,endDate)
      
// // //         // Query the database for available flights based on user input
// // //         const availableFlights = await FlightModel.find({
          
// // //             'departure.location': startLocation,
// // //             'arrival.location': endLocation,
// // //             // 'departure.date_time': { $gte: startDate },
// // //             // 'arrival.date_time': { $lte: endDate },
// // //             // [`class_availability.${selectedClass}.remaining_seats`]: { $gte: adults + children + infants },

// // //         });



// // //         console.log('Available Flights:', availableFlights);

// // //         res.status(200).json({ availableFlights });
// // //     } catch (error) {
// // //         console.error(error);
// // //         res.status(500).json({ error: 'Internal server error' });
// // //     }
// // // });




// // // const bookedFlightSchema = new mongoose.Schema({
// // //   airline: String,
// // //   departure: {
// // //     date_time: Date,
// // //     location: String,
// // //   },
// // //   arrival: {
// // //     date_time: Date,
// // //     location: String,
// // //   },
// // //   classSelection: String,
// // // });

// // // const BookedFlight = mongoose.model('BookedFlight', bookedFlightSchema);

// // // // Routes
// // // app.post('/api/book-flight', async (req, res) => {
// // //   try {
// // //     // Extract booking details from the request body
// // //     const { airline, departure, arrival, classSelection } = req.body;

// // //     // Create a new booked flight document
// // //     const bookedFlight = new BookedFlight({
// // //       airline,
// // //       departure,
// // //       arrival,
// // //       classSelection,
// // //     });

// // //     // Save the booked flight document to the database
// // //     await bookedFlight.save();

// // //     // Send a response indicating that the booking was successful
// // //     res.status(200).json({ message: 'Booking successful', bookedFlight });
// // //   } catch (error) {
// // //     console.error('Error booking flight:', error);
// // //     res.status(500).json({ error: 'Internal server error' });
// // //   }
// // // });



// // // // Define a route to fetch all available flights
// // // app.get('/api/get-all-flights', async (req, res) => {
// // //   try {
// // //     // Query the database to retrieve all flights
// // //     const allFlights = await FlightModel.find();

// // //     // Send the retrieved flights as a response
// // //     res.status(200).json({ availableFlights: allFlights });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ error: 'Internal server error' });
// // //   }
// // // });







 
// // // app.listen(port, () => {
// // //   console.log(`Server is listening at http://localhost:${port}`);
// // // });






// // const express = require('express');
// // const app = express();
// // const bodyParser = require('body-parser');
// // const mongoose = require('mongoose');
// // const cors = require('cors');

// // const port = 3000;
// // app.use(bodyParser.json());

// // // Middleware
// // app.use(cors());
// // app.use(express.json());


// // mongoose.connect('mongodb+srv://tharunkumarva:Atlas123123@cluster0.6rwnhir.mongodb.net/successonfly', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });
// // mongoose.connection.on('connected', () => {
// //     console.log('Connected to MongoDB');
// //   });


// // // Schema and Model setup
// // const userSchema = new mongoose.Schema({
// //     username: { type: String, unique: true, required: true },
// //     password: { type: String, required: true },
// // });
  
// // const UserModel = mongoose.model('User', userSchema);
  
// // // Register route
// // app.post('/api/users', async (req, res) => {
// //     const { username, password } = req.body;
  
// //     try {
// //         // Check if the username already exists
// //         const existingUser = await UserModel.findOne({ username });
  
// //         if (existingUser) {
// //             return res.status(400).json({ error: 'Username already exists' });
// //         }
  
// //         // Create a new user
// //         const newUser = new UserModel({ username, password });
      
// //         // Save the new user to the database
// //         await newUser.save();
  
// //         res.status(201).json({ message: 'User registered successfully', user: newUser });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });
  
// // // Login route
// // app.post('/api/login', async (req, res) => {
// //     const { username, password } = req.body;
  
// //     try {
// //         // Check if the user with the provided credentials exists in the database
// //         const user = await UserModel.findOne({ username, password });
  
// //         if (user) {
// //             res.status(200).json({ message: 'Login successful', user });
// //         } else {
// //             res.status(401).json({ error: 'Invalid credentials' });
// //         }
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });
  
// // // Flight schema
// // const flightSchema = new mongoose.Schema({
// //     flight_number: String,
// //     airline: String,
// //     departure: {
// //         location: String,
// //         date_time: String,
// //     },
// //     arrival: {
// //         location: String,
// //         date_time: String,
// //     },
// //     class_availability: {
// //         Business: {
// //             remaining_seats: Number,
// //             price: Number,
// //         },
// //         Economy: {
// //             remaining_seats: Number,
// //             price: Number,
// //         },
// //     },
// // }, { collection: "flightsavilables" });

// // const FlightModel = mongoose.model('flightsavilables', flightSchema);

// // // Check flights route
// // app.post('/api/check-flights', async (req, res) => {
// //     const { startLocation, endLocation, startDate, endDate, adults, children, infants, selectedClass } = req.body;

// //     try {
// //         // Query the database for available flights based on user input
// //         const availableFlights = await FlightModel.find({
// //             'departure.location': startLocation,
// //             'arrival.location': endLocation,
// //         });

// //         console.log('Available Flights:', availableFlights);

// //         res.status(200).json({ availableFlights });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });

// // // Book flight route
// // app.post('/api/book-flight', async (req, res) => {
// //     try {
// //         // Extract booking details from the request body
// //         const { airline, departure, arrival, classSelection } = req.body;

// //         // Create a new booked flight document
// //         const bookedFlight = new BookedFlight({
// //             airline,
// //             departure,
// //             arrival,
// //             classSelection,
// //             userEmail,
// //         });

// //         // Save the booked flight document to the database
// //         await bookedFlight.save();

// //         // Send a response indicating that the booking was successful
// //         res.status(200).json({ message: 'Booking successful', bookedFlight });
// //     } catch (error) {
// //         console.error('Error booking flight:', error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });

// // // Fetch all flights route
// // app.get('/api/get-all-flights', async (req, res) => {
// //     try {
// //         // Query the database to retrieve all flights
// //         const allFlights = await FlightModel.find();

// //         // Send the retrieved flights as a response
// //         res.status(200).json({ availableFlights: allFlights });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });

// // app.listen(port, () => {
// //     console.log(`Server is listening at http://localhost:${port}`);
// // });




// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const port = 3000;
// app.use(bodyParser.json());

// // Middleware
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://tharunkumarva:Atlas123123@cluster0.6rwnhir.mongodb.net/successonfly', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// // Schema and Model setup
// const userSchema = new mongoose.Schema({
//   username: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
// });

// const UserModel = mongoose.model('User', userSchema);

// // Register route
// app.post('/api/users', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the username already exists
//     const existingUser = await UserModel.findOne({ username });

//     if (existingUser) {
//       return res.status(400).json({ error: 'Username already exists' });
//     }

//     // Create a new user
//     const newUser = new UserModel({ username, password });

//     // Save the new user to the database
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully', user: newUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the user with the provided credentials exists in the database
//     const user = await UserModel.findOne({ username, password });

//     if (user) {
//       res.status(200).json({ message: 'Login successful', user });
//     } else {
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Flight schema
// const flightSchema = new mongoose.Schema({
//   flight_number: String,
//   airline: String,
//   departure: {
//     location: String,
//     date_time: String,
//   },
//   arrival: {
//     location: String,
//     date_time: String,
//   },
//   class_availability: {
//     Business: {
//       remaining_seats: Number,
//       price: Number,
//     },
//     Economy: {
//       remaining_seats: Number,
//       price: Number,
//     },
//   },
// }, { collection: "flightsavilables" });

// const FlightModel = mongoose.model('flightsavilables', flightSchema);

// // Check flights route
// app.post('/api/check-flights', async (req, res) => {
//   const { startLocation, endLocation, startDate, endDate, adults, children, infants, selectedClass } = req.body;

//   try {
//     // Query the database for available flights based on user input
//     const availableFlights = await FlightModel.find({
//       'departure.location': startLocation,
//       'arrival.location': endLocation,
//     });

//     console.log('Available Flights:', availableFlights);

//     res.status(200).json({ availableFlights });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // // Book flight route
// // app.post('/api/book-flight', async (req, res) => {
// //   try {
// //     // Extract booking details from the request body
// //     const { airline, departure, arrival, classSelection, userEmail } = req.body;

// //     // Create a new booked flight document
// //     const bookedFlight = new BookedFlight({
// //       airline,
// //       departure,
// //       arrival,
// //       classSelection,
// //       userEmail,
// //     });

// //     // Save the booked flight document to the database
// //     await bookedFlight.save();

// //     // Send a response indicating that the booking was successful
// //     res.status(200).json({ message: 'Booking successful', bookedFlight });
// //   } catch (error) {
// //     console.error('Error booking flight:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // });


// // Book flight route
// app.post('/api/book-flight', async (req, res) => {
//     try {
//       // Extract booking details from the request body
//       const { flight, classSelection, userEmail } = req.body;
  
//       // Assuming that the flight object contains the necessary details
//       const { airline, departure, arrival } = flight;
  
//       // Create a new booked flight document
//       const bookedFlight = new BookedFlight({
//         airline,
//         departure,
//         arrival,
//         classSelection,
//         userEmail,
//       });
  
//       // Save the booked flight document to the database
//       await bookedFlight.save();
  
//       // Send a response indicating that the booking was successful
//       res.status(200).json({ message: 'Booking successful', bookedFlight });
//     } catch (error) {
//       console.error('Error booking flight:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  

// // Fetch all flights route
// app.get('/api/get-all-flights', async (req, res) => {
//   try {
//     // Query the database to retrieve all flights
//     const allFlights = await FlightModel.find();

//     // Send the retrieved flights as a response
//     res.status(200).json({ availableFlights: allFlights });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });




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

// Book flight route
app.post('/api/book-flight', async (req, res) => {
  try {
    // Extract booking details from the request body
    const { flight, classSelection, userEmail } = req.body;

    // Assuming that the flight object contains the necessary details
    const { airline, departure, arrival } = flight;

    // Create a new booked flight document
    const bookedFlight = new BookedFlight({
      airline,
      departure,
      arrival,
      classSelection,
      userEmail,
    });

    // Save the booked flight document to the database
    await bookedFlight.save();

    // Send a response indicating that the booking was successful
    res.status(200).json({ message: 'Booking successful', bookedFlight });
  } catch (error) {
    console.error('Error booking flight:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

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

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
