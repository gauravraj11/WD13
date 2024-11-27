// Object to store form data
const formData = {};

// Add event listeners to form fields
document.getElementById('name').addEventListener('input', (e) => {
    formData.name = e.target.value;
});

document.getElementById('email').addEventListener('input', (e) => {
    formData.email = e.target.value;
});

document.getElementById('password').addEventListener('input', (e) => {
    formData.password = e.target.value;
});

// On form submission
document.getElementById('submitBtn').addEventListener('click', () => {
    console.log('Form Data:', formData);
    alert('Form submitted. Check console for data.');
});
