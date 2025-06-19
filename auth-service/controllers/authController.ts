import { Request, Response } from "express";
import User from '../models/User';
import axios from 'axios';

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });

    // Notify service
    await axios.post('http://notification-service:4002/notify/email', {
      to: email,
      subject: 'Welcome to Microservice App!',
      message: `Hello ${name}, your account has been created.`
    });

    res.status(201).json({ message: 'User registered', user });

  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export { register };