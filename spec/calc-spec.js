import { Age } from './../src/calc.js';

describe('Age', function() {
  it('should calculate accurate age in Earth years from user birthdate', function() {
    let age = new Age("03-20-86")
    expect(age.earthYears()).toEqual(32)
  });

  it('should convert user Earth years to seconds', function() {
    let age = new Age("03-20-86")
    expect(age.earthYears()).toEqual(32)
    expect(age.calcSeconds()).toEqual(1009152000)
  })

  it('should convert user earth years to Mercury years', function() {
    let age = new Age("03-20-86")
    expect(age.earthYears()).toEqual(32)
    expect(age.mercuryYears()).toEqual(133)
  })

  it('should convert user earth years to Venus years', function() {
    let age = new Age("March 20 1986")
    expect(age.earthYears()).toEqual(32)
    expect(age.venusYears()).toEqual(51)
  })

  it('should convert user earth years to Mars years', function() {
    let age = new Age("3/20/86")
    expect(age.earthYears()).toEqual(32)
    expect(age.marsYears()).toEqual(17)
  })

})
