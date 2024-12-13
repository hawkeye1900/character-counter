const result = document.getElementById("result");
const runCountBtn = document.querySelector(".countBtn");

runCountBtn.addEventListener("click", count);

function count() {
  let text = document.getElementById("inputText").value;
  console.log(text);
  let charCount = text.match(/./g)?.length || 0;
  result.textContent = charCount;
}
