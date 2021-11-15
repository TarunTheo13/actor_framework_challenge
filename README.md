# Actor Framework Challenge

Building a simple actor framework in JavaScript. The actor framework will execute dynamic code, potentially across a network with unknown latency (up to infinity).

## Challenge

- Make an actor class that has two PRIVATE variables (its state) X and Y
- Give it an inbox queue that receives messages
- Messages will be of the form {x:A, y:B}, {x:C}, or {y:D} (where A, B, C, D are arbitrary numbers)
- Give it a PUBLIC run function() that executes the messages (thereby updating the PRIVATE state)
- Instantiate a new actor
- Create a GLOBAL event loop that repeatedly executes the actor's run function
- Couple the mouse coordinates to the actors state - X and Y