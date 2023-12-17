document.getElementById('form_btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    // kuha ang values from the email input
    var emailValue = document.getElementById('form_email').value;

    // tig check kung ang email kay gacontain "@" tas mo ends ug ".com"
    if (emailValue.includes('@') && emailValue.endsWith('.com')) {
            // mo sud sa index.html
            window.location.href = 'index.html';
    } else {
        // pakita sa error message if ever invalid ang email format
        alert('Please enter a valid email address ending with .com');
    }
});