let time = document.querySelector(".time");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let count = 0;
start.addEventListener("click", function () {
  const interval = setInterval(() => {
    time.textContent = count++;
    stop.addEventListener("click", () => {
      clearInterval(interval);
    });
  }, 1000);
});
