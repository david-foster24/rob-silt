export class FastCollector {
  private state: number;

  constructor(seed: number = 52) {
    this.state = seed;
  }

  load_builder(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 52) % 997;
    }
    return result;
  }
}

const obj = new FastCollector();
console.log(obj.load_builder(52));
