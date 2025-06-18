import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword, name });

  await user.save();
  res.status(201).json({ message: 'Usuario registrado correctamente.' });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(401).json({ error: 'Email o contraseña incorrecta.' });
    return;
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

  res.json({ token });
};

export const getProfile = async (req: Request, res: Response) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};
