document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    if (username === 'admin' && password === 'admin') {
        alert('Login successful');
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        errorElement.textContent = 'Invalid username or password';
    }
});
