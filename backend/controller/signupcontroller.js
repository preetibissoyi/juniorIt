const uuid = require('uuid');
const bcrypt = require('bcrypt');
const User = require('../model/usermodel');
const sendVerificationCode = require('./twilio')

const userformcreate = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, mobilePhoneNumber } = req.body;

    // Generate a unique username using uuid
    const generatedUsername = uuid.v4();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds for hashing

    // Create a new user object based on the User model with the hashed password
    const newUser = new User({
      username: generatedUsername,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      mobilePhoneNumber,
    });

    // Save the user data to the database
    await newUser.save();

    // Send the verification code to the user's mobile phone number using the Twilio API (code not shown here)
// In your userformcreate function
const verificationCode = cryptoRandomString({ length: 6, type: 'numeric' });
await sendVerificationCode(newUser.mobilePhoneNumber, verificationCode);

    // Return a success response to the front-end
    res.status(201).json({ status: 'success', message: 'User signed up successfully.', user: newUser });
  } catch (error) {
    // If any error occurs, return an error response to the front-end
    console.error('Error:', error);
    res.status(500).json({ status: 'error', message: 'An internal server error occurred.' });
  }
};

module.exports = userformcreate;



    
    
    
    
    
    
    
    
