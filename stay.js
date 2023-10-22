var emailInput = document.querySelector('input[type="email"]');
var subscribeButton = document.getElementById('Subscribe');
function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function showSuccessMessage() {
    var inputEmail = emailInput.value.trim();
    if (validateEmail(inputEmail)) {
        alert('Subscribe successfully!');
        emailInput.value = '';
    }
    else {
        alert('Please enter a valid email address.');
    }
}
subscribeButton === null || subscribeButton === void 0 ? void 0 : subscribeButton.addEventListener('click', showSuccessMessage);
