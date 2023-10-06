const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};


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
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  if(document
    .querySelector('#signupform')){
      document
      .querySelector('#signupform')
      .addEventListener('submit', signupFormHandler);
    }

  if ( document
    .querySelector('#loginform')) {
      document
      .querySelector('#loginform')
      .addEventListener('submit', loginFormHandler);
    } 

  