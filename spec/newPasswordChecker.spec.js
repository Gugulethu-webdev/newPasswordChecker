var check = require("../src/newPasswordChecker.js.js");

describe("checking if the password meets the minimum conditions", () => {
  it("checks if password exists", () => {
    expect(check.passwordIsValid("")).toEqual("password should exist");
  });

  it("checks if password is longer than 8 charactors", () => {
    expect(check.passwordIsValid("hsgd")).toBe(
      "password length should be greater than 8"
    );
  });

  it(" checks if password has atleast one lowercase letter", () => {
    expect(check.passwordIsValid("AAAAAAAAAAAA")).toBe(
      "password should have atleast one lowercase letter"
    );
  });

  it("checks if password has atleast one uppercase letter", () => {
    expect(check.passwordIsValid("aaaaaaaaaa")).toEqual(
      "password should have atleast one uppercase letter"
    );
  });

  it("checks if password has atleast one digit", () => {
    expect(check.passwordIsValid("aaaaAAAAA")).toBe(
      "password should have atleast one digit"
    );
  });

  it(" checks if password has atleast one special character", () => {
    expect(check.passwordIsValid("aaaaAAAAA12")).toBe(
      "password should have atleast one special character"
    );
  });
  it("checks if password meets all the requirement", () => {
    expect(check.passwordIsValid("aaaaAAAAA@12")).toEqual("password is valid");
  });
  it("checks for first and second conditions",()=>{
    expect(check.passwordIsOk("aa")).toBe("password is never ok")
  })
  it("returns true if password meets at least 3 of requirements", ()=>{
    expect(check.passwordIsOk("aaaaaaakkk")).toEqual(true)
  })
  it("return false if password is not valid", ()=>{
    expect(check.passwordIsOk("123345566777")).toEqual(false)
  })
});
