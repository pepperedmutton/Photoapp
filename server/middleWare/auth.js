import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // Check header exists
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
 
  try {
    //  Verify token — throws error if invalid/expired
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user data to request object
    req.user = decoded;

    next(); // continue to route handler
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}
