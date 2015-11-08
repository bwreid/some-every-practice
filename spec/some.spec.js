var myCode = require('../some');

describe('myCode', function () {
  it('#anyGreaterThan10', function () {
    var goodInput = [8,9,10,11];
    expect(myCode.anyGreaterThan10(goodInput)).toBe(true);

    var badInput = [1,2,3,4];
    expect(myCode.anyGreaterThan10(badInput)).toBe(false);
  });

  it('#longWord', function () {
    var goodInput = ['democracy', 'aristocracy'];
    expect(myCode.longWord(goodInput)).toBe(true);

    var badInput = ['democracy', 'republic'];
    expect(myCode.longWord(badInput)).toBe(false);
  });

  it('#truePossibilities', function () {
    var goodInput = [[false,false,false],
                     [false,false,false],
                     [false,false,true]];
    expect(myCode.truePossibilities(goodInput)).toBe(true);

    var badInput = [[false,false,false],
                    [false,false,false],
                    [false,false,false]];
    expect(myCode.truePossibilities(badInput)).toBe(false);
  });

  it('#lostCarcosa', function () {
    var goodInput = ['Strange is the night where black stars rise,',
                     'And strange moons circle through the skies,',
                     'But stranger still is',
                     'Lost Carcosa.'];
    expect(myCode.lostCarcosa(goodInput)).toBe(true);

    var badInput = ['Along the shore the cloud waves break,',
                    'The twin suns sink behind the lake,',
                    'The shadows lengthen',
                    'In Carcosa.'];
    expect(myCode.lostCarcosa(badInput)).toBe(false);
  });
})