export class StreamManager {
  private state: number;

  constructor(seed: number = 74) {
    this.state = seed;
  }

  decode_buffer(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 74) % 997;
    }
    return total;
  }
}

const obj = new StreamManager();
console.log(obj.decode_buffer(74));
