import Frame from '../../src/bowling/Frame';
import FrameRecord from '../../src/bowling/FrameRecord';

test('Should calculate regular frames correctly', () => {
  let frameRecord = new FrameRecord();
  let frame = new Frame(1, 4);
  frameRecord.setFrame(1, frame);

  expect(frameRecord.calculateFrameScore(1)).toBe(5);
});

describe('Should calculate frame for spares correctly', () => {
  test('Should calculate frame score for a spare correctly', () => {
    let frameRecord = new FrameRecord();
    let frame1 = new Frame(5, 5);
    frameRecord.setFrame(1, frame1);
    let frame2 = new Frame(2, 8);
    frameRecord.setFrame(2, frame2);

    expect(frameRecord.calculateFrameScore(1)).toBe(12);
  });
});

describe('Should calculate strikes correctly', () => {
  test('Should calculate frame score for a strike correctly', () => {
    let frameRecord = new FrameRecord();

    let frame1 = new Frame(10, 0);
    frameRecord.setFrame(1, frame1);

    let frame2 = new Frame(2, 8);
    frameRecord.setFrame(2, frame2);

    expect(frameRecord.calculateFrameScore(1)).toBe(20);
  });

  test('Should calculate frame score in double case correctly', () => {
    let frameRecord = new FrameRecord();

    let frame1 = new Frame(10, 0);
    frameRecord.setFrame(1, frame1);

    let frame2 = new Frame(10, 0);
    frameRecord.setFrame(2, frame2);

    let frame3 = new Frame(2, 7);
    frameRecord.setFrame(3, frame3);

    expect(frameRecord.calculateFrameScore(1)).toBe(29);
    expect(frameRecord.calculateFrameScore(2)).toBe(19);
  });

  test('Should calculate frame score in turkey case correctly', () => {
    let frameRecord = new FrameRecord();

    let frame1 = new Frame(10, 0);
    frameRecord.setFrame(1, frame1);

    let frame2 = new Frame(10, 0);
    frameRecord.setFrame(2, frame2);

    let frame3 = new Frame(10, 0);
    frameRecord.setFrame(3, frame3);

    let frame4 = new Frame(1, 3);
    frameRecord.setFrame(4, frame4);

    expect(frameRecord.calculateFrameScore(1)).toBe(30);
    expect(frameRecord.calculateFrameScore(2)).toBe(24);
    expect(frameRecord.calculateFrameScore(3)).toBe(14);
  });

  test('Should calculate frame score in four-bagger correctly', () => {
    let frameRecord = new FrameRecord();

    let frame1 = new Frame(10, 0);
    frameRecord.setFrame(1, frame1);

    let frame2 = new Frame(10, 0);
    frameRecord.setFrame(2, frame2);

    let frame3 = new Frame(10, 0);
    frameRecord.setFrame(3, frame3);

    let frame4 = new Frame(10, 0);
    frameRecord.setFrame(4, frame4);

    let frame5 = new Frame(4, 3);
    frameRecord.setFrame(5, frame5);

    expect(frameRecord.calculateFrameScore(1)).toBe(30);
    expect(frameRecord.calculateFrameScore(2)).toBe(30);
    expect(frameRecord.calculateFrameScore(3)).toBe(27);
    expect(frameRecord.calculateFrameScore(4)).toBe(17);
  });
});

describe('Calculate 10th frame score', () => {
  test('Should calculate score for spared 10th frame correctly', () => {
    let frameRecord = new FrameRecord();

    let frame = new Frame(1, 9, 6);
    frameRecord.setFrame(10, frame);

    expect(frameRecord.calculateFrameScore(10)).toBe(16);
  });

  test('Should calculate score for strike 10th frame correctly', () => {
    let frameRecord = new FrameRecord();

    let frame = new Frame(10, 10, 6);
    frameRecord.setFrame(10, frame);

    expect(frameRecord.calculateFrameScore(10)).toBe(26);
  });
});

describe('Calculate 9th frame score', () => {
  test('Should calculate score for spared 9th frame with regular 10th frame correctly', () => {
    let frameRecord = new FrameRecord();

    let frame9 = new Frame(1, 9);
    frameRecord.setFrame(9, frame9);

    let frame10 = new Frame(0, 3);
    frameRecord.setFrame(10, frame10);

    expect(frameRecord.calculateFrameScore(9)).toBe(10);
  });

  test('Should calculate score for spared 9th frame with spared 10th frame correctly', () => {
    let frameRecord = new FrameRecord();

    let frame9 = new Frame(1, 9);
    frameRecord.setFrame(9, frame9);

    let frame10 = new Frame(9, 1, 10);
    frameRecord.setFrame(10, frame10);

    expect(frameRecord.calculateFrameScore(9)).toBe(19);
  });

  test('Should calculate score for spared 9th frame with striked 10th frame correctly', () => {
    let frameRecord = new FrameRecord();

    let frame9 = new Frame(1, 9);
    frameRecord.setFrame(9, frame9);

    let frame10 = new Frame(10, 10, 0);
    frameRecord.setFrame(10, frame10);

    expect(frameRecord.calculateFrameScore(9)).toBe(20);
  });

  test('Should calculate score for strike 9th frame with 10th frame (10, 10, 10) correctly', () => {
    let frameRecord = new FrameRecord();

    let frame9 = new Frame(10, 0);
    frameRecord.setFrame(9, frame9);

    let frame10 = new Frame(10, 10, 10);
    frameRecord.setFrame(10, frame10);

    expect(frameRecord.calculateFrameScore(9)).toBe(30);
    expect(frameRecord.calculateFrameScore(10)).toBe(30);
  });
});
