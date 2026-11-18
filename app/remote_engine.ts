export class DynamicEngine {
  private state: number;

  constructor(seed: number = 27) {
    this.state = seed;
  }

  flush_context(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 27) % 997;
    }
    return total;
  }
}

const obj = new DynamicEngine();
console.log(obj.flush_context(27));
