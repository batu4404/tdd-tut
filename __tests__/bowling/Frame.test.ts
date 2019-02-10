import Frame from '../../src/bowling/Frame';

describe('Get number of frame spins', () => {
  test('Should get number of regular frame spins correctly', () => {
    let frame = new Frame(2, 4);

    expect(frame.getNumberOfSpins()).toBe(6);
  });

  test('Should get number of 10th frame spins with value (0, 10, 10) correctly', () => {
    let frame = new Frame(0, 10, 10);

    expect(frame.getNumberOfSpins()).toBe(10);
  });

  test('Should get number of 10th frame spins with value (10, 10, 10) correctly', () => {
    let frame = new Frame(10, 10, 10);

    expect(frame.getNumberOfSpins()).toBe(10);
  });
});

describe('Check spare', () => {
  test('Should be a spare', () => {
    let frame = new Frame(5, 5);

    expect(frame.isSpare()).toBe(true);
  });

  test('Should not be a spare (regular)', () => {
    let frame = new Frame(5, 1);

    expect(frame.isSpare()).toBe(false);
  });

  test('Should not be a spare (strike)', () => {
    let frame = new Frame(10, 0);

    expect(frame.isSpare()).toBe(false);
  });
});

describe('Check strike', () => {
  test('Should be a strike', () => {
    let frame = new Frame(10, 0);

    expect(frame.isStrike()).toBe(true);
  });

  test('Should be a strike with 10th frame (10, 10, 10)', () => {
    let frame = new Frame(10, 10, 10);

    expect(frame.isStrike()).toBe(true);
  });

  test('Should not be a strike (regular)', () => {
    let frame = new Frame(5, 1);

    expect(frame.isStrike()).toBe(false);
  });

  test('Should not be a strike (spare)', () => {
    let frame = new Frame(1, 9);

    expect(frame.isStrike()).toBe(false);
  });

  test('Should not be a strike (spare with first attemp failed)', () => {
    let frame = new Frame(1, 9);

    expect(frame.isStrike()).toBe(false);
  });
});
