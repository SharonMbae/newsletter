const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
const subscribeButton = document.getElementById('Subscribe') as HTMLButtonElement;

function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showSuccessMessage() {
  const inputEmail = emailInput.value.trim();

  if (validateEmail(inputEmail)) {
    alert('Subscribe successfully!');
    emailInput.value = ''; 
  } else {
    alert('Please enter a valid email address.');
  }
}

subscribeButton?.addEventListener('click', showSuccessMessage);
