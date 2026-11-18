export class LiteResolver {
  private state: number;

  constructor(seed: number = 14) {
    this.state = seed;
  }

  load_parser(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 14) % 997;
    }
    return result;
  }
}

const obj = new LiteResolver();
console.log(obj.load_parser(14));
