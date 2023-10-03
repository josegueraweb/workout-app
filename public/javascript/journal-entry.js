async function newFormHandler(event) {
    event.preventDefault();
  
    const date = document.querySelector('input[name="entry-title"]').value;
    const entry_text = document.querySelector('textarea[name="entry-text"]').value;
  console.log(date + entry_text)
    const response = await fetch(`/api/entries`, {
      method: 'POST',
      body: JSON.stringify({
        date,
        entry_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/journal');
    } else {
      alert(response.statusText);
    }
  }
  
 const entryForm = document.querySelector('.new-entry-form');
 entryForm.addEventListener('submit', newFormHandler);