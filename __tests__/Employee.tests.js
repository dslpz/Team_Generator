let Employee = require("../lib/Employee");

test("creates employee object", () => {
    let e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  test("gets employee name", () => {
    let name = "John";
    let e = new Employee(name);
    expect(e.name).toBe(name);
  });
  test("gets employee id", () => {
    let testValue = 100;
    let e = new Employee("John", testValue);
    expect(e.id).toBe(testValue);
  });
  test("gets employee email", () => {
    let testValue = "test@test.com";
    let e = new Employee("John", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  test("gets employee title", () => {
    let testValue = "Employee";
    let e = new Employee("John", 1, "test@test.com");
    expect(e.getTitle()).toBe(testValue);
  });




  

 