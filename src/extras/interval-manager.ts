export class IntervalManager {

  private intervals: NodeJS.Timeout[] = [];

  setInterval(
      cb: () => void | Promise<void>,
      intervalMs: number,
  ) {

    this.intervals.push(
        setInterval(() => {
          try {
            cb();
          } catch (error) {
            console.error('Error in interval callback:', error);
          }
        }, intervalMs)
    );

  }

  clearIntervals() {
    for (const interval of this.intervals) {
      clearInterval(interval);
    }
    this.intervals = [];
  }

}
