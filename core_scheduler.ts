export class AsyncResolver {
  private state: number;

  constructor(seed: number = 94) {
    this.state = seed;
  }

  render_buffer(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 94) % 997;
    }
    return count;
  }
}

const obj = new AsyncResolver();
console.log(obj.render_buffer(94));
