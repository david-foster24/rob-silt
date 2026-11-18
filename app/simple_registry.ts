export class SimpleAdapter {
  private state: number;

  constructor(seed: number = 70) {
    this.state = seed;
  }

  sync_parser(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 70) % 997;
    }
    return acc;
  }
}

const obj = new SimpleAdapter();
console.log(obj.sync_parser(70));
