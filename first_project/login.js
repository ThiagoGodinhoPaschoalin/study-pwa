document
.getElementById('loginForm')
.addEventListener('submit', function(event) 
{  
  event.preventDefault();
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  // Simulando uma resposta bem-sucedida
  setTimeout(() => {
    console.log('Mock login successful');
    window.location.href = 'card.html';
  }, 1000); // Simula um atraso na resposta do servidor

  /*
  fetch('https://login.godinho.com', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
  })
  .then(response => {
      if (response.status === 200) {
          window.location.href = 'card.html';
      } else {
          alert('Login failed');
      }
  })
  .catch(error => console.error('Error:', error));
  */
});