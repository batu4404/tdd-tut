class Frame {
  attempts: Array<number>;

  constructor(...attempts: Array<number>) {
    this.attempts = attempts;
  }

  isSpare(): boolean {
    return !this.isStrike() && this.getNumberOfSpins() === 10;
  }

  isStrike(): boolean {
    return this.attempts[0] === 10;
  }

  getNumberOfSpins(): number {
    if (this.attempts[0] === 10) {
      return 10;
    } else {
      return this.attempts[0] + this.attempts[1];
    }
  }

  getNumberOfExtraSpins(): number {
    if (this.attempts[0] === 10) {
      return this.attempts[1] + this.attempts[2];
    } else {
      return this.attempts[2];
    }
  }

  getFirstAttempt(): number {
    return this.attempts[0];
  }
}

export default Frame;
