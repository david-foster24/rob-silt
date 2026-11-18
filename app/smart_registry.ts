export class LocalProvider {
  private state: number;

  constructor(seed: number = 16) {
    this.state = seed;
  }

  sync_processor(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 16) % 997;
    }
    return acc;
  }
}

const obj = new LocalProvider();
console.log(obj.sync_processor(16));
