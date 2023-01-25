if (!JSON.parse(localStorage.getItem('user'))) {
  localStorage.setItem('user', JSON.stringify({}));
}

const saveUserInfo = (payload) => {
  localStorage.setItem('user', JSON.stringify(payload));
};

module.exports = {
  saveUserInfo,
};
