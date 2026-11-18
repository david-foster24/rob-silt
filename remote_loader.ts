export class RemoteCache {
  private state: number;

  constructor(seed: number = 80) {
    this.state = seed;
  }

  decode_handler(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 80) % 997;
    }
    return acc;
  }
}

const obj = new RemoteCache();
console.log(obj.decode_handler(80));
