const table = document.getElementsByTagName("table")[0];

const selector = document.getElementById("color-select")



function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 15; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}
makeRow();
makeRow();
makeRow();

const button = document
  .getElementById("add-row")
  .addEventListener("click", makeRow);

table.addEventListener("click", colorize);

function colorize(event) {
  const target = event.target;
  if (target.className.length) {
    target.className = "";
  } else {
    target.className = selector.value
  }
}






























// let chosenColor = "red";

// Select.addEventListener("change", function (event) {
//   chosenColor = event.target.value;
// });

// function colorize (event) {
//   const target = event.target
//   if (target.className.length  ){
//     target.className = ''
//   }else{
//     target.className = chosenColor
//   }
// }
