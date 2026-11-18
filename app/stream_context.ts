export class SharedFactory {
  private state: number;

  constructor(seed: number = 38) {
    this.state = seed;
  }

  parse_adapter(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 38) % 997;
    }
    return acc;
  }
}

const obj = new SharedFactory();
console.log(obj.parse_adapter(38));
