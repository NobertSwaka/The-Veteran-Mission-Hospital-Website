const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // Your MySQL host (or IP if hosted remotely)
  user: 'root',      // Your MySQL username
  password: 'koinonia', // Your MySQL password
  database: 'vet_db', // The database you created
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Endpoint to fetch doctors by clinic type
app.get('/doctors/:clinicType', (req, res) => {
  const clinicType = req.params.clinicType;
  const query = 'SELECT name FROM doctors WHERE clinic_type = ?';

  db.query(query, [clinicType], (err, results) => {
    if (err) {
      console.error('Error fetching doctors:', err);
      res.status(500).send('Server error');
    } else {
      res.json(results);
    }
  });
});

// Endpoint to handle appointment bookings
app.post('/api/appointments', (req, res) => {
  const { name, email, phone, date, time, clinicType, doctor, clinicId } = req.body;

  const query = 'INSERT INTO appointments (name, email, phone, date, time, clinicType, doctor, clinicId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(query, [name, email, phone, date, time, clinicType, doctor, clinicId], (err, result) => {
    if (err) {
      console.error('Error inserting appointment:', err);
      res.status(500).json({ error: 'Failed to book appointment' });
    } else {
      res.status(201).json({
        message: 'Appointment booked successfully',
        appointmentId: result.insertId,
      });
    }
  });
});

// Start server
const PORT = 3306;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
