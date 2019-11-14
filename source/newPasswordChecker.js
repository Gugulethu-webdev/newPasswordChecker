//this is the final function after doing the whole process of TextDecoder.

function passwordIsValid(password) {
  try {
    // Checks password exists
    if (password == "") {
      throw "password should exist";
    }

    // Check length
    if (password.length <= 8) {
      throw "password should be longer tha 8 charactors";
    }

    // Check password has small letters
    if (password.match(/[a-z]/g) == null) {
      throw "password should have atleast one lowercase letter";
    }

    // Check password has big letters
    if (password.match(/[A-Z]/g) == null) {
      throw "password should have atleast one uppercase letter";
    }

    // Check password has small letters
    if (password.match(/[0-9]/g) == null) {
      throw "password should have atleast one digit";
    }

    // check for special charector
    if (password.match(/[~!@#$%^&*()_+]/g) == null) {
      throw "password should have atleast one special character";
    }
  } catch (err) {
    console.log(err);
  }
}

passwordIsValid("gggP66&");

// The paaasord-is-ok funciton below return "password never ok is conditions 1 and 2 are not met"
// It also returns a boolen true if at least three of the specified conditions are met.

function passwordIsOk(password) {
  pregex2 = /[\w]{9,}/g;
  var results = password.match(pregex2);

  try {
    if (password == "" || password.length <= 8) {
      throw "password is never ok";
    }
    if (results !== null) {
      throw true;
    } else if (results == null) {
      throw false;
    } else {
      throw "password is valid";
    }
  } catch (err) {
    console.log(err);
  }
}

passwordIsOk("oioioiooo");

//module.exports = { passwordIsValid };
