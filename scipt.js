const result = document.getElementById("result");
const runCountBtn = document.querySelector(".Btn");
const resetBtn = document.querySelector(".resetBtn");

runCountBtn.addEventListener("click", count);
resetBtn.addEventListener("click", reset);

function count() {
  let text = document.getElementById("inputText").value;
  let charCount = text.match(/./g)?.length || 0;
  result.textContent = charCount;
}

function reset() {
  document.getElementById("inputText").value = "";
  result.textContent = 0;
}
