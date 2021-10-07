const { add, subtract, divide, multiply } = require("./calculator")
describe('calculate the sum or multiplication of the following', () => {
  it('should add the inputs', () => {
    expect(add(2, 3)).toEqual(5)
    expect(add(7, 3)).toEqual(10)
    expect(add(2, 19)).toEqual(21)
  })

  it('should divide the inputs', () => {
    expect(divide(4, 4)).toEqual(1)
    expect(divide(10, 2)).toEqual(5)
    expect(divide(20, 5)).toEqual(4)
  })

  it('should multiply the inputs', () => {
    expect(multiply(2, 5)).toEqual(10)
    expect(multiply(8, 3)).toEqual(24)
    expect(multiply(2, 7)).toEqual(14)
  })

  it('should subtract the inputs', () => {
    expect(subtract(2, 2)).toEqual(0)
    expect(subtract(21, 7)).toEqual(14)
  })

})