let submit = document.querySelector(".submit");
let container = document.querySelector(".container");
let nextContainer = document.querySelector(".next-container");
let buttons = document.querySelectorAll(".circle");
let selected = document.querySelector(".selected");

// submit.addEventListener("click", () => {
//   nextContainer.classList.remove("hidden");
//   container.classList.add("hidden");
// });

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    document.querySelector(".special")?.classList.remove("special");
    buttons[i].classList.add("special");
    let text = buttons[i].textContent;
    selected.textContent = `your score is ${text} of 5`;

    submit.addEventListener("click", () => {
      nextContainer.classList.remove("hidden");
      container.classList.add("hidden");
    });
  });
}
