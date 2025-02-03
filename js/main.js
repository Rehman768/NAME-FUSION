function login() {
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;
    // Add your login logic here
    console.log('Login with:', emailOrPhone, password);
    // Redirect to main page if login is successful
    window.location.href = 'main.html';
}

function signup() {
    const fullName = document.getElementById('fullName').value;
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;
    // Add your sign-up logic here
    console.log('Sign up with:', fullName, emailOrPhone, password);
    // Redirect to login page after successful sign-up
    window.location.href = 'login.html';
}
