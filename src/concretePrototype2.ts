import { Prototype } from './prototype';

export class ConcretePrototype2 implements Prototype {
  private attribute3: boolean;
  private attribute4: string[];

  constructor(attribute3: boolean, attribute4: string[]) {
    this.attribute3 = attribute3;
    this.attribute4 = attribute4;
  }

  public clone(): ConcretePrototype2 {
    return new ConcretePrototype2(this.attribute3, this.attribute4);
  }

  public getAttribute3(): boolean {
    return this.attribute3;
  }

  public getAttribute4(): string[] {
    return this.attribute4;
  }
}
