const Intern = require("../lib/Intern");

const intern = new Intern("hello", 110, "helllo@hello.com", 1053);

it("should have property of school ,getSchool method , getRole method", () => {
  //you can pass the get school value here.
  expect(typeof intern.sch_ool).not.toBeNaN();
  expect(intern.getRole).toHaveReturnedWith("Intern");
});
