const twilio = require('twilio');

const accountSid = 'ACdb8dd922cc8b13fd33655d91a06c2b7f';
const authToken = '[AuthToken]';
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';

const client = twilio(accountSid, authToken);

const sendVerificationCode = async (phoneNumber, verificationCode) => {
    const accountSid = 'ACdb8dd922cc8b13fd33655d91a06c2b7f';
    const authToken = '[AuthToken]';
    const client = require('twilio')(accountSid, authToken);
    
    const sendVerificationCode = async (phoneNumber, verificationCode) => {
      try {
        await client.messages.create({
          body: `Your verification code is: ${verificationCode}`,
          from: '8917551147',
          to: phoneNumber,
        });
        console.log('Verification code sent successfully.');
      } catch (error) {
        console.error('Error sending verification code:', error);
      }
    };
    
    module.exports = sendVerificationCode;
    
