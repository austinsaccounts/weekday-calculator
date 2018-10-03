import { backEnd } from './../src/weekday-calc.js';

describe('backEnd', function() {

  it('should return Wednesday', function() {
    let inputDateObj = new Date('2018-10-03');
    let result = backEnd(inputDateObj);
    let control = "That's a Wednesday.";
    expect(result).toEqual(control);
  })

  it('should return Monday', function() {
    let inputDateObj = new Date('2018-10-01');
    let result = backEnd(inputDateObj);
    let control = `That's a Monday.`;
    expect(result).toEqual(control);
  })
})
