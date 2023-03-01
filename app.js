
let saveEl = document.getElementById("save-el");
let countResult = document.getElementById("counter");
let count = 0;
console.log(saveEl)
function increment() {
          count += 1;
          countResult.textContent = count;

}

function save() {
          let countP = count + " - ";
          saveEl.textContent += countP;
          countResult.textContent = 0;
          count = 0;
}