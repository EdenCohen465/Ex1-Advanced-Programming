// the function check if the password that was entered is ok.
function checkValidPassword(password) {
  // flags that represent if the password have letters ot numbers.
  var numbers = false;
  var letters = false;
  // passing the password chars.
  for (var i = 0; i < password.length; i++) {
    // if it is an integer, numbers flag is true.
    if (Number.isInteger(parseInt(password.charAt(i)))) {
      numbers = true;
    }
    // if it is a letter, letters flag is true.
    if (/^[a-zA-Z]+$/.test(password.charAt(i))) {
      letters = true;
    }
  }
  // if one of the flags is false, return false.
  if (!numbers || !letters) {
    return false;
  }
  // else, return true.
  return true;
}

export default checkValidPassword;