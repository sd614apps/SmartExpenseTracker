import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User, { IUser } from '../models/User';
import { sendVerificationEmail } from '../utils/email';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req: Request, res: Response) => {
  // Validate incoming request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { email, phone, password } = req.body;

  try {
    // Check if user with email or phone already exists
    if (email) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Email is already registered' }] });
      }
    }

    if (phone) {
      const existingUser = await User.findOne({ phone });
      if (existingUser) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Phone number is already registered' }] });
      }
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate a verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');

    // Create the user
    const newUser: IUser = new User({
      email,
      phone,
      password: hashedPassword,
      verificationToken,
    });

    await newUser.save();

    // Send verification email if email is provided
    if (email) {
      await sendVerificationEmail(email, verificationToken);
    }

    // If phone verification is needed, implement similar logic with SMS

    res.status(201).json({
      msg: 'Registration successful. Please verify your account.',
    });
  } catch (error) {
    console.error(`Registration Error: ${(error as Error).message}`);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
};

export const verifyAccount = async (req: Request, res: Response) => {
  const { token } = req.query;

  if (!token || typeof token !== 'string') {
    return res.status(400).json({ errors: [{ msg: 'Invalid or missing token' }] });
  }

  try {
    // Find user with the given verification token
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid token' }] });
    }

    // Update user verification status
    user.isVerified = true;
    user.verificationToken = ''; // Clear the token
    await user.save();

    res.status(200).json({ msg: 'Account verified successfully' });
  } catch (error) {
    console.error(`Verification Error: ${(error as Error).message}`);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
};
