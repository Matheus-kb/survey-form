function validatePage() {
    const investmentsSelect = document.getElementById("investments");
    const financialInputs = document.querySelectorAll("input[name='option']");
  
    let isInvestmentSelected = false;
    let isFinancialSelected = false;
  
    if (investmentsSelect.value !== "") {
      isInvestmentSelected = true;
    }
  
    financialInputs.forEach(function (input) {
      if (input.checked) {
        isFinancialSelected = true;
      }
    });
  
    if (isInvestmentSelected && isFinancialSelected) {
      window.location.href = "/src/pagefive.html";
    } else {
      alert("Please, fill in all fields.");
    }
  
    return false;
  }
  
  function backPage() {
    window.location.href = "/src/pagethree.html";
    return false;
  }
  
  function skipPage() {
    window.location.href = "/src/pagefive.html";
    return false;
  }
  