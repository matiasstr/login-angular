import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const token = req.header('Authorization')?.split(' ')[1];
  
  if (!token) {
    res.status(401).json({ error: 'Acceso denegado' });
    return; // <--- Corta acá, NO retorna el objeto Response
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido' });
    return; // <--- También corta acá
  }
}
