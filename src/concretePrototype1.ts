import { Prototype } from './prototype';

export class ConcretePrototype1 implements Prototype {
  private attribute1: string;
  private attribute2: number;

  constructor(attribute1: string, attribute2: number) {
    this.attribute1 = attribute1;
    this.attribute2 = attribute2;
  }

  public clone(): ConcretePrototype1 {
    return new ConcretePrototype1(this.attribute1, this.attribute2);
  }

  public getAttribute1(): string {
    return this.attribute1;
  }

  public getAttribute2(): number {
    return this.attribute2;
  }
}
