const nameInputEl = document.querySelector(`#name-input`);
const nameOutputEl = document.querySelector(`#name-output`);
nameInputEl.addEventListener(`input`, (e) => {
  const newName = nameInputEl.value.trim();
  if (newName === "") {
    nameOutputEl.textContent = "Anonymous";
  } else {
    nameOutputEl.textContent = newName;
  }
});
