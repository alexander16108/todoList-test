const stringLength = require("./string");

describe("length of the string", () => {
  it("check if the length of the string is less than one", () => {
    expect( typeof stringLength("money")).toEqual("number");
  });
  it("check if the length of string is greater than 10", () => {
    expect(stringLength("go and get some dinner")).toEqual(22);
  });
  it("checks if the length of string is less than 1", () => {
    expect(() => stringLength()).toThrow()
  });
  
  it("should display the length of the string", () => {
    expect(stringLength("them")).toBe(4);
  });

  it("should display the length of the string", () => {
    expect(stringLength("haters")).toBe(6);
  });
});
