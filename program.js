document.addEventListener("DOMContentLoaded", () => {
  console.log(`DOM Content loaded successfully`);

  // DOM elements
  const input = document.getElementById("user-birthdate");
  const btn = document.getElementById("btn");
  const resultDiv = document.getElementById("result");

  function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }

  let currentAge = null;

  // event listener
  input.addEventListener("change", (e) => {
    const value = e.target.value;
    const birthYear = Number(value.slice(0, 4));
    currentAge = calculateAge(birthYear);
  });

  btn.addEventListener("click", () => {
    if (currentAge === null) {
      resultDiv.textContent = "Please select your birthdate";
      return;
    }

    resultDiv.classList.add("result");

    // Clean up previous content
    resultDiv.innerHTML = "";

    resultDiv.textContent = `Your Age is ${currentAge} years old`;
  });
});
