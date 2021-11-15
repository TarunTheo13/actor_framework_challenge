class Actor {
  #X;
  #Y;

  constructor() {
    this.#X = 0;
    this.#Y = 0;
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