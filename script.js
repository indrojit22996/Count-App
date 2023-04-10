// For count app
let addBtn = document.querySelector(".add-btn");
let subBtn = document.querySelector(".sub-btn");
let line = document.querySelector(".line");
let value = document.querySelector(".value");
let reset = document.querySelector(".reset");
let count = 0;
addBtn.addEventListener("click", () => {
  count++;
  line.innerText = "Your value is Incrimented";
  value.innerText = count;
  value.style.backgroundColor = "#2f9e44";
  line.style.backgroundColor = "#2f9e44";
});
subBtn.addEventListener("click", () => {
  count--;
  line.innerText = "Your value is Decrimented";
  value.innerText = count;
  value.style.backgroundColor = "#e03131";
  line.style.backgroundColor = "#e03131";
});
reset.addEventListener("click", () => {
  count = 0;
  value.innerText = 0;
  line.innerText = "Your value is Reset";
  value.style.backgroundColor = "#eebefa";
  line.style.backgroundColor = "#eebefa";
});

// for color change
const btn = document.querySelector(".color-btn");
const randomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";

  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};

console.log(randomColor());

function changeRandomColor() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);
