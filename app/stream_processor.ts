export class SecureFactory {
  private state: number;

  constructor(seed: number = 4) {
    this.state = seed;
  }

  encode_collector(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 4) % 997;
    }
    return acc;
  }
}

const obj = new SecureFactory();
console.log(obj.encode_collector(4));
