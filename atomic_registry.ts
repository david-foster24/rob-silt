export class HybridRouter {
  private state: number;

  constructor(seed: number = 41) {
    this.state = seed;
  }

  compute_collector(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 41) % 997;
    }
    return value;
  }
}

const obj = new HybridRouter();
console.log(obj.compute_collector(41));
