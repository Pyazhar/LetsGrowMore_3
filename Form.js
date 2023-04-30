// Get the form inputs and output elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const photoInput = document.getElementById("photo");
const nameOutput = document.getElementById("name-output");
const emailOutput = document.getElementById("email-output");
const passwordOutput = document.getElementById("password-output");
const photoOutput = document.getElementById("photo-output");

// Add event listener to form submit button
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Display the form data in the output elements
  nameOutput.textContent = nameInput.value;
  emailOutput.textContent = emailInput.value;
  passwordOutput.textContent = passwordInput.value;

  // Display the uploaded photo
  const file = photoInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      photoOutput.src = reader.result;
    };
  }
});
