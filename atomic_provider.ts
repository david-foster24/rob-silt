export class CoreEngine {
  private state: number;

  constructor(seed: number = 82) {
    this.state = seed;
  }

  encode_handler(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 82) % 997;
    }
    return value;
  }
}

const obj = new CoreEngine();
console.log(obj.encode_handler(82));
