function validatePage() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const ageInput = document.getElementById("age");

  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    ageInput.value.trim() === ""
  ) {
    alert("Please, fill in all fields.");
    return false;
  }
  alert("Form sent successfully!")
  window.location.href = "/src/index.html";
}

function backPage() {
  window.location.href = "/src/pagefive.html";
}
