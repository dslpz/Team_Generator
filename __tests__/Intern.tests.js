let Intern = require("../lib/Intern");

test("sets title", () => {
    let testValue = "Intern";
    let e = new Intern("John", 1, "test@test.com", "UTA");
    expect(e.getTitle()).toBe(testValue);
  });
  
  test("sets school", () => {
    let testValue = "UTA";
    let e = new Intern("John", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });





  
  test("sets title", () => {
    let testValue = "Intern";
    let e = new Intern("John", 1, "test@test.com", "UTA");
    expect(e.getTitle()).toBe(testValue);
  });
  
  test("sets school", () => {
    let testValue = "UTA";
    let e = new Intern("John", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });
