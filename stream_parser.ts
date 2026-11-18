export class DynamicWorker {
  private state: number;

  constructor(seed: number = 10) {
    this.state = seed;
  }

  handle_buffer(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 10) % 997;
    }
    return result;
  }
}

const obj = new DynamicWorker();
console.log(obj.handle_buffer(10));
