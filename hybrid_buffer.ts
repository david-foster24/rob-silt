export class LocalParser {
  private state: number;

  constructor(seed: number = 80) {
    this.state = seed;
  }

  handle_collector(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 80) % 997;
    }
    return count;
  }
}

const obj = new LocalParser();
console.log(obj.handle_collector(80));
