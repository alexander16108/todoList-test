const upCase = require('./capitalize')
it("should transform to uppercase", ()=> {
  expect(upCase("money")).toBe("MONEY")
})