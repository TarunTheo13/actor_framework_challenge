document.addEventListener("DOMContentLoaded", () => {
  const updateValues = () => {
    document.querySelector('#current-values').innerText = actor.getXandY();
  };

  const actor = new Actor();
  updateValues();

  window.addEventListener('mousemove', (e) => {
    let message = {x: e.x, y: e.y};
    actor.addToInbox(message);
    actor.processInbox();
    updateValues();
  });

});
