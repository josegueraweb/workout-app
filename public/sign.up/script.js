const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#fullname').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const phonenumber = document.querySelector('#phonenumber').value.trim();
  
    if (name && email && password && phonenumber) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, phonenumber }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/home.page/home.html');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#signupform')
  .addEventListener('submit', signupFormHandler);
  