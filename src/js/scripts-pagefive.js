function validatePage() {
  const textArea = document.getElementById("details");

  if (textArea.value.trim() === "") {
    alert("Please, fill in all fields.");
    return false;
  }
  window.location.href = "/src/pagesix.html";
  return false;
}

function backPage() {
  window.location.href = "/src/pagefour.html";
  return false;
}

function skipPage() {
  window.location.href = "/src/pagesix.html";
  return false;
}