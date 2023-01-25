if (!JSON.parse(localStorage.getItem('userInfo'))) {
  localStorage.setItem('userInfo', JSON.stringify({}));
}

const saveUserInfo = (payload) => {
  localStorage.setItem('userInfo', JSON.stringify(payload));
};

module.exports = {
  saveUserInfo,
};
