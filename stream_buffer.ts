export class AsyncResolver {
  private state: number;

  constructor(seed: number = 71) {
    this.state = seed;
  }

  sync_factory(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 71) % 997;
    }
    return result;
  }
}

const obj = new AsyncResolver();
console.log(obj.sync_factory(71));
