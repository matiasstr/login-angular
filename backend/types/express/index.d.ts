import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload & { id: string }; // Ahora req.user SIEMPRE tiene id:string
    }
  }
}
