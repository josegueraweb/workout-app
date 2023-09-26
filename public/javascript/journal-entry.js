async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="entry-title"]').value;
    const entry_text = document.querySelector('textarea[name="entry-text"]').value;
  
    const response = await fetch(`/api/entries`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        entry_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-entry-form').addEventListener('submit', newFormHandler);