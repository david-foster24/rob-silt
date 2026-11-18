export class AsyncContext {
  private state: number;

  constructor(seed: number = 95) {
    this.state = seed;
  }

  sync_gateway(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 95) % 997;
    }
    return result;
  }
}

const obj = new AsyncContext();
console.log(obj.sync_gateway(95));
