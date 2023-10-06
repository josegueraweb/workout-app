async function registerFormHandler(event) {
    event.preventDefault();
  
    const firstName = document.querySelector('#first-name-register').value.trim();  
    const lastName = document.querySelector('#last-name-register').value.trim();
    const phoneNumber = document.querySelector('#phone-number-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();

  
    if (firstName && lastName && phoneNumber && email && password) {
      const response = await fetch('/api/userRoutes', {
        method: 'POST',
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phoneNumber,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        console.log('Success');
        alert('New user has been created! You are now able to login log in');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }}
   
var registerBtn = document.querySelector('.btn-register')
registerBtn.addEventListener('click', registerFormHandler);