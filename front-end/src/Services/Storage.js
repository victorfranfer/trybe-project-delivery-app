if (!JSON.parse(localStorage.getItem('user'))) {
  localStorage.setItem('user', JSON.stringify({}));
}

const saveUserInfo = (payload) => {
  localStorage.setItem('user', JSON.stringify(payload));
};

const getUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  return userInfo;
};

module.exports = {
  saveUserInfo,
  getUserInfo,
};
