// const { validateToken } = require("../Utils/jwtUtils");

// const tokenController = async (req, res) => {
//   const token = req.header('token');

//   const { error, role } = await validateToken(token);

//   if (error) return res.status(401).json({ error })

//   return res.status(200).json({ role })
// }

// module.exports = {
//   tokenController,
// }