if (!JSON.parse(localStorage.getItem('user'))) {
  localStorage.setItem('user', JSON.stringify({}));
}

if (!JSON.parse(localStorage.getItem('cart'))) {
  localStorage.setItem('cart', JSON.stringify([]));
}

const saveUserInfo = (payload) => {
  localStorage.setItem('user', JSON.stringify(payload));
};

const getUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  return userInfo;
};

const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const getCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart;
};

module.exports = {
  saveUserInfo,
  getUserInfo,
  saveCart,
  getCart,
};
