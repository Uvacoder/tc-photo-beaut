const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const btn = document.getElementById("button");
const form = document.getElementById("form");

function handleSubmit() {
  alert("Thank you for submitting your info!");
  nameInput.value = "";
  email.value = "";
  phone.value = "";
  console.log("cleared");
}

form.onsubmit(handleSubmit);

btn.addEventListener("submit", () => {
  alert("test");
});
