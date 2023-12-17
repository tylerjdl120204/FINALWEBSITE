document.getElementById('form_btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // Get the values from the email and password inputs
    var emailValue = document.getElementById('form_email').value;

    // Check if the email contains "@" and ends with ".com"
    if (emailValue.includes('@') && emailValue.endsWith('.com')) {
            // Redirect to index.html
            window.location.href = 'index.html';
    } else {
        // Show an error message for invalid email format
        alert('Please enter a valid email address ending with .com');
    }
});