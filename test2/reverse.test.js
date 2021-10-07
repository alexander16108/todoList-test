const reverseString = require("./reverse");

describe("to reverse a string", () => {
  it('reverses the string', () => {
    expect(reverseString("food")).toEqual("doof")
    expect(reverseString("money")).toBe("yenom")
    expect(reverseString("coke")).toBe("ekoc")
    expect(reverseString("cake")).toBe("ekac")
    expect(reverseString("light")).toBe("thgil")
    expect(reverseString("love")).toBe("evol")
  })
})