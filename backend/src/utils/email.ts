import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'SendGrid', // Use 'SendGrid' or appropriate service
  auth: {
    user: 'apikey', // For SendGrid, use 'apikey' as the user
    pass: process.env.SENDGRID_API_KEY,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendVerificationEmail = async (to: string, token: string) => {
  const verificationUrl = `${process.env.CLIENT_URL}/verify?token=${token}`;

  const mailOptions: EmailOptions = {
    to,
    subject: 'Verify Your Account',
    html: `
      <h2>Welcome to SmartExpenseTracker!</h2>
      <p>Please verify your account by clicking the link below:</p>
      <a href="${verificationUrl}">Verify Account</a>
      <p>If you did not create an account, please ignore this email.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Verification email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}: ${(error as Error).message}`);
    throw new Error('Email could not be sent');
  }
};
