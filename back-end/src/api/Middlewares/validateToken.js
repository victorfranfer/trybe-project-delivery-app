const { validateToken } = require('../Utils/jwtUtils');

const validateTokenMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const result = await validateToken(authorization);
  
  if (result.error) return res.status(401).json({ message: 'Expired or invalid token' });

  req.body.user = result;

  next();
};
module.exports = validateTokenMiddleware;