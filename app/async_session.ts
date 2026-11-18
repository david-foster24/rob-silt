export class SecureBuilder {
  private state: number;

  constructor(seed: number = 40) {
    this.state = seed;
  }

  dispatch_dispatcher(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 40) % 997;
    }
    return count;
  }
}

const obj = new SecureBuilder();
console.log(obj.dispatch_dispatcher(40));
