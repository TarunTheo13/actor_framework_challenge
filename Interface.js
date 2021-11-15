document.addEventListener("DOMContentLoaded", () => {
  const updateValues = () => {
    document.querySelector('#current-values').innerText = actor.getXandY();
  };

  const actor = new Actor();
  updateValues();

});