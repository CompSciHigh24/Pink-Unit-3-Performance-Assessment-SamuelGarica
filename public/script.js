document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".visit-checkbox");
  const completedTracker = document.getElementById("completedTracker");
  let completedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
  completedTracker.innerText = `Collected: ${completedCount} / ${checkboxes.length}`;

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        completedCount++;
      } else {
        completedCount--;
      }
      completedTracker.innerText = `Collected: ${completedCount} / ${checkboxes.length}`;
      if (completedCount === checkboxes.length) {
        const duration = 1000; 
        const end = Date.now() + duration;

        (function frame() {
          confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 }, 
            zIndex: 9999
          });
          confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 }, 
            zIndex: 9999
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());
      }

    });
  });
});

