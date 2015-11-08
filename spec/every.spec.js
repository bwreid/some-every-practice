var myCode = require('../every');

describe('myCode', function () {
  it('#allEven', function () {
    var goodInput = [2,4,10];
    expect(myCode.allEven(goodInput)).toBe(true);

    var badInput = [2,4,11];
    expect(myCode.allEven(badInput)).toBe(false);
  });

  it('#allSameType', function () {
    var goodInput = [1,2,3];
    expect(myCode.allSameType(goodInput)).toBe(true);

    var badInput = [1,2,3,'4'];
    expect(myCode.allSameType(badInput)).toBe(false);
  });

  it('#positiveMatrix', function () {
    var goodInput = [[1,2,3],
                     [4,5,6],
                     [7,8,9]];
    expect(myCode.positiveMatrix(goodInput)).toBe(true);

    var badInput = [[-1,2,3],
                    [4,-5,6],
                    [7,8,-9]];
    expect(myCode.positiveMatrix(badInput)).toBe(false);
  });

  it('#allSameVowels', function () {
    var goodInput = ['amalgam', 'zoom'];
    expect(myCode.allSameVowels(goodInput)).toBe(true);
    
    var badInput = ['zoom', 'oligopoly'];
    expect(myCode.allSameVowels(badInput)).toBe(false);
  });
});