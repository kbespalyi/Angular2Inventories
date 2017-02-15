export class Engine {

  hasStarted: Boolean;

  constructor() {
    this.hasStarted = false;
  }

  start() {
    console.log('Start');
    this.hasStarted = true;
  }

}
