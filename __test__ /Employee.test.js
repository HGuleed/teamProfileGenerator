const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

const jeff = new Employee("jeff", 234, "jhg@Test.com");

it("should have properties of name, id, and email", () => {
  expect(jeff.name).toEqual("jeff");
});
