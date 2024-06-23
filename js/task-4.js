// const formEl = document.querySelector(`.login-form`);
// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const email = e.target.elements.email.value.trim();
//   const password = e.target.elements.password.value.trim();

//   if (!email || !password) {
//     alert("All form fields must be filled in");
//     return;
//   } else {
//     const formData = {
//       email,
//       password,
//     };
//     console.log(formData);
//   }
//   e.target.reset();
// });

const formEl = document.querySelector(`.login-form`);
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email,
    password,
  };
  e.target.reset();

  console.log(formData);
});
