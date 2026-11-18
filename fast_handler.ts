export class StreamWorker {
  private state: number;

  constructor(seed: number = 84) {
    this.state = seed;
  }

  handle_client(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 84) % 997;
    }
    return acc;
  }
}

const obj = new StreamWorker();
console.log(obj.handle_client(84));
