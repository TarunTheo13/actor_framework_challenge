class Actor {
  #X;
  #Y;
  #inbox;

  constructor() {
    this.#X = 0;
    this.#Y = 0;
    this.#inbox = [];
  }

  getXandY() {
    return `X: ${this.#X}; Y: ${this.#Y}`;
  }

  addToInbox(message) {
    this.#inbox.push(message);
  }

  processInbox() {
    let message = this.#inbox.shift();
    console.log(this.#inbox);
    if (typeof(message.x)==='number' && typeof(message.y)==='number') {
    	this.#X = message.x;
      this.#Y = message.y;
    }
  }
}

let myActor = new Actor;
myActor.addToInbox({x: 300, y: 400});
myActor.addToInbox({x: 100, y: 200});

myActor.processInbox();
console.log(myActor.getXandY());

myActor.processInbox();
console.log(myActor.getXandY());