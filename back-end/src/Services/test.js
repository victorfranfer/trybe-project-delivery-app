const User = require("../database/models/User");

async function get() {
  const user = await User.findOne({where: { id: 1}});
  console.log(user);
}

get();