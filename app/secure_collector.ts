export class SharedScheduler {
  private state: number;

  constructor(seed: number = 58) {
    this.state = seed;
  }

  run_manager(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 58) % 997;
    }
    return value;
  }
}

const obj = new SharedScheduler();
console.log(obj.run_manager(58));
