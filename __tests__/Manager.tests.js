let Manager = require("../lib/Manager");

test("gets office number", () => {
    let testValue = 100;
    let e = new Manager("John", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  test("asks title", () => {
    let testValue = "Manager";
    let e = new Manager ("John", 1, "test@test.com", 100);
    expect(e.getTitle()).toBe(testValue);
  });


  


  test("gets office number", () => {
    let testValue = 100;
    let e = new Manager("John", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  test("asks title", () => {
    let testValue = "Manager";
    let e = new Manager ("John", 1, "test@test.com", 100);
    expect(e.getTitle()).toBe(testValue);
  });