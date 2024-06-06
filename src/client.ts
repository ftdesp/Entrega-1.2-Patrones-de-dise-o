import { ConcretePrototype1 } from './concretePrototype1';
import { ConcretePrototype2 } from './concretePrototype2';

export class Client {
  private prototype1: ConcretePrototype1;
  private prototype2: ConcretePrototype2;

  constructor() {
    this.prototype1 = new ConcretePrototype1('Hello', 123);
    this.prototype2 = new ConcretePrototype2(true, ['World', '!']);
  }

  public operation1(): void {
    const object = this.prototype1.clone();
    console.log(object.getAttribute1()); // 'Hello'
    console.log(object.getAttribute2()); // 123
  }

  public operation2(): void {
    const object = this.prototype2.clone();
    console.log(object.getAttribute3()); // true
    console.log(object.getAttribute4()); // ['World', '!']
  }
}
