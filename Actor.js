class Actor {
  #X;
  #Y;
  #inbox;

  constructor() {
    this.#X = 0;
    this.#Y = 0;
    this.#inbox = [];
  }

  getX() {
    return this.#X;
  }

  getY() {
    return this.#Y;
  }
}

let MyActor = new Actor;
console.log(MyActor.getX())