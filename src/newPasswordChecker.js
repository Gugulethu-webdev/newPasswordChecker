"use strict";
function passwordIsValid(password) {
  var msg = "";
  // Checks password exists
  if (password == "") {
    msg = "password should exist";
  }

  // Check length
  else if (password.length <= 8) {
    msg = "password length should be greater than 8";
  }

  // Check password has small letters
  else if (password.match(/[a-z]/g) == null) {
    msg = "password should have atleast one lowercase letter";
  }

  // Check password has big letters
  else if (password.match(/[A-Z]/g) == null) {
    msg = "password should have atleast one uppercase letter";
  }

  // Check password has small letters
  else if (password.match(/[0-9]/g) == null) {
    msg = "password should have atleast one digit";
  }

  // check for special charector
  else if (password.match(/[~!@#$%^&*()_+]/g) == null) {
    msg = "password should have atleast one special character";
  } else {
    msg = "password is valid";
  }
  return msg;
}

// The paaasordIsOk funciton below return "password never ok is conditions 1 and 2 are not met"
// It also returns a boolen true if at least three of the specified conditions are met.

let passwordIsOk = function(password) {
  var pregex2 = /[a-z]{9,}/g;
  var results = password.match(pregex2);
  var msg = "";

  if (password == "" || password.length <= 8) {
    msg = "password is never ok";
  } else if (results !== null) {
    msg = true;
  } else {
    msg = false;
  }
  return msg;
};

module.exports = { passwordIsValid, passwordIsOk };
