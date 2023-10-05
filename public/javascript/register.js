async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();  
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        console.log('Success');
        alert('New user has been created you are now able to login log in');
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }}
   
var signupbtn = document.querySelector('.btn')
signupbtn.addEventListener('click', signupFormHandler);