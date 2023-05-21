// Wellcome Function
function wellcome(){
  const userName=prompt("Please Enter Your Name");
  if(userName){
    alert(`Wellcome ${userName} our Count App`);
  }
}
wellcome();


// For count app
let addBtn = document.querySelector(".add-btn");
let subBtn = document.querySelector(".sub-btn");
let line = document.querySelector(".line");
let value = document.querySelector(".value");
let resetBtn = document.querySelector(".reset");
let count = 0;
// Add Function
function addiction(){
  count++;
  line.innerText = "Your value is Incrimented";
  value.innerText = count;
  value.style.color = "#2f9e44";
  line.style.color = "#2f9e44";
}
// substraction Function
function sustraction(){
  count--;
  line.innerText = "Your value is Decrimented";
  value.innerText = count;
  value.style.color = "#e03131";
  line.style.color = "#e03131";
}
// Reset Function
function reset(){
  count = 0;
  value.innerText = 0;
  line.innerText = "Your value is Reset";
  value.style.color = "#eebefa";
  line.style.color = "#eebefa";
}
addBtn.addEventListener("click",addiction);
subBtn.addEventListener("click",sustraction);
resetBtn.addEventListener("click",reset);

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
