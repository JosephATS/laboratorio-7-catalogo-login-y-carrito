document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'josephats' && password === 'josephats') {
        
        window.location.href = 'index.html'; 
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
});


