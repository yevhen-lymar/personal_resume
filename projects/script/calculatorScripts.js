const display = document.getElementById("display");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const input = document.querySelectorAll("input");

input.forEach((el) => {
  el.addEventListener("click", (e) => {
    const value = e.target.value;
    display.value += value;
  });
});

clear.addEventListener("click", () => {
  display.value = "";
});

equal.addEventListener("click", () => {
  display.value = math.evaluate(display.value);
});
