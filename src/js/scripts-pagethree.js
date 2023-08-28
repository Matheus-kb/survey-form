function validatePage() {
  const accountSelect = document.getElementById("status-account");
  const financialInputs = document.querySelectorAll("input[name='option']");

  let isAccountSelected = false;
  let isFinancialSelected = false;

  if (accountSelect.value !== "") {
    isAccountSelected = true;
  }

  financialInputs.forEach(function (input) {
    if (input.checked) {
      isFinancialSelected = true;
    }
  });

  if (isAccountSelected && isFinancialSelected) {
    window.location.href = "/src/pagefour.html";
  } else {
    alert("Please, fill in all fields.");
  }

  return false;
}

function backPage(){
    window.location.href ='/src/pagetwo.html'
    return false;
}

function skipPage(){
    window.location.href ='/src/pagefour.html'
    return false;
}


