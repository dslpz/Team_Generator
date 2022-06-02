let Engineer = require("../lib/Engineer");

test("sets github account", () => {
    let testValue = "GitHubUser";
    let e = new Engineer("John", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });
  test("sets title", () => {
    let testValue = "Engineer";
    let e = new Engineer("John", 1, "test@test.com", "githubuser");
    expect(e.getTitle()).toBe(testValue);
  });




  
  test("sets github account", () => {
    let testValue = "GitHubUser";
    let e = new Engineer("John", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });
  test("sets title", () => {
    let testValue = "Engineer";
    let e = new Engineer("John", 1, "test@test.com", "githubuser");
    expect(e.getTitle()).toBe(testValue);
  });
  