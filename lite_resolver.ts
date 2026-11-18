export class RemoteSession {
  private state: number;

  constructor(seed: number = 72) {
    this.state = seed;
  }

  compute_registry(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 72) % 997;
    }
    return value;
  }
}

const obj = new RemoteSession();
console.log(obj.compute_registry(72));
