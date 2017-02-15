import { Engine } from './engine';
import { Doors } from './doors';

export class Car {

  engine: Engine;
  doors: Doors;

  constructor() {
    this.engine = new Engine();
    this.doors = new Doors();
  }

  startEngine() {
    this.engine.start();
  }

}
