import express from 'express';
import { register, verifyAccount } from '../controllers/authController';
import { registerValidation } from '../middleware/validationMiddleware';

const router = express.Router();

// @route   POST /auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerValidation, register);

// @route   GET /auth/verify
// @desc    Verify user account
// @access  Public
router.get('/verify', verifyAccount);

export default router;
