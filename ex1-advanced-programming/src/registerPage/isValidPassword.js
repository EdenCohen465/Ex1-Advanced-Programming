function checkValidPassword(password) {
  var numbers = false;
  var letters = false;
  for (var i = 0; i < password.length; i++) {
    if (Number.isInteger(parseInt(password.charAt(i)))) {
      numbers = true;
    }
    if (/^[a-zA-Z]+$/.test(password.charAt(i))) {
      letters = true;
    }
  }
  if (!numbers || !letters) {
    return false;
  }
  return true;
}

export default checkValidPassword;