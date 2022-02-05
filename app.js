const btnElement = document.querySelector("button");
const inputElement = document.querySelector("input");
const list = document.querySelector("ul");

const onAddGoalPressed = () => {
  const textInput = inputElement.value;
  if (textInput == "") return;

  const listElemnt = document.createElement("li");

  listElemnt.textContent = textInput;

  list.appendChild(listElemnt);

  inputElement.value = "";
};

btnElement.addEventListener("click", onAddGoalPressed);

inputElement.addEventListener("keyup", () => {
  if (event.keyCode == 13) {
    event.preventDefault();
    onAddGoalPressed();
  }
});
