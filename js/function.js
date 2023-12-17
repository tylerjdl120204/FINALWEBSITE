document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    // kuha ang values from the email and password inputs
    var emailValue = document.getElementById('loginEmail').value;
    var passwordValue = document.getElementById('loginPassword').value;
    
    // tig check kung ang email kay gacontain "@" tas mo ends ug ".com"
    if (emailValue.includes('@') && emailValue.endsWith('.com')) {
        // tig check uf 8 characters ang password para choy
        if (passwordValue.length >= 8) {
            // mo sud sa index.html
            window.location.href = 'index.html';
        } else {
            // pakita an error message if ever invalid ang gitas-on sa password 
            alert('Password should be at least 8 characters long');
        }
    } else {
        // pakita sa error message if ever invalid ang email format
        alert('Please enter a valid email address ending with .com');
    }
});
