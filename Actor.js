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

  addToInbox(message) {
    this.#inbox.push(message);
  }
}

let MyActor = new Actor;
console.log(MyActor.getX())