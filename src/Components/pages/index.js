const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Your SMTP credentials for Gmail or another provider
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'veteranmissionhospitals@gmail.com', // Your Gmail email address
    pass: 'TVMH@2024',  // Your Gmail password or App password (if using 2FA)
  },
});

// Cloud function to send email after appointment
exports.sendAppointmentEmail = functions.firestore
  .document('appointments/{appointmentId}')
  .onCreate((snap, context) => {
    const appointmentData = snap.data();

    // Email message data
    const mailOptions = {
      from: 'veteranmissionhospitals@gmail.com', // sender address
      to: appointmentData.email,    // recipient email address (user who booked the appointment)
      subject: 'Appointment Confirmation', // subject line
      text: `Hello ${appointmentData.name},\n\nYour appointment has been successfully booked for ${appointmentData.clinicType}. We look forward to seeing you!`, // email body
    };

    // Send email
    return transporter.sendMail(mailOptions)
      .then(() => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  });
