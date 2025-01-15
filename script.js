let displayElement = document.getElementById("display");

function append(value) {
  if (displayElement.innerText === "0" && value !== ".") {
    displayElement.innerText = value;
  } else {
    displayElement.innerText += value;
  }
}

function clearDisplay() {
  displayElement.innerText = "0";
}

function deleteLast() {
  let current = displayElement.innerText;
  if (current.length > 1) {
    displayElement.innerText = current.slice(0, -1);
  } else {
    displayElement.innerText = "0";
  }
}

function calculate() {
  try {
    let result = eval(displayElement.innerText);
    displayElement.innerText = result;
  } catch {
    displayElement.innerText = "Error";
  }
}
