let password = "";

describe("checking conditions", () => {
  it("password should exist", () => {
    exepect(password).not.toBe("");
  });

  it("password should be longer tha 8 charactors", () => {
    exepect(password.length).greaterThan(8);
  });

  it("password should have atleast one lowercase letter", () => {
    exepect(password).toMatch(/[a-z]/);
  });

  it("password should have atleast one uppercase letter", () => {
    exepect(password).toMatch(/[A-Z]/);
  });

  it("password should have atleast one digit", () => {
    exepect(password).toMatch(/[0-9]/);
  });

  it("password should have atleast one special character", () => {
    exepect(password).toMatch(/[~!@#$%^&*()_+]/);
  });
});
