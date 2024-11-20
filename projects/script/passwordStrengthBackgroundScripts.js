const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  //   console.log(20 - length * 2);
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
