import Frame from './Frame';

class FrameRecord {
  frames: Array<Frame>;

  constructor() {
    this.frames = new Array(11);
  }

  setFrame(frameNth: number, frame: Frame): void {
    this.frames[frameNth] = frame;
  }

  calculateFrameScore(frameNth: number): number {
    if (frameNth === 10) {
      let frame = this.frames[frameNth];

      return frame.getNumberOfSpins() + frame.getNumberOfExtraSpins();
    }

    return (
      this.frames[frameNth].getNumberOfSpins() +
      this.calculateExtraScore(frameNth)
    );
  }

  calculateExtraScore(frameNth: number): number {
    let frame = this.frames[frameNth];

    if (frame.isSpare()) {
      return this.frames[frameNth + 1].getFirstAttempt();
    } else if (frame.isStrike()) {
      let secondFrame = this.frames[frameNth + 1];
      let secondFrameSpins = secondFrame ? secondFrame.getNumberOfSpins() : 0;
      let thirdFrame = this.frames[frameNth + 2];
      let thirdFrameSpins = thirdFrame ? thirdFrame.getNumberOfSpins() : 0;

      let firstExtra = secondFrameSpins;
      let secondExtra =
        secondFrame && secondFrame.isStrike() ? thirdFrameSpins : 0;

      return firstExtra + secondExtra;
    } else {
      return 0;
    }
  }
}

export default FrameRecord;
