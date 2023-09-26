async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="entry-title"]').value;
    const entry_text = document.querySelector('textarea[name="entry-text"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length-1
    ];
  
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        entry_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-entry-form').addEventListener('submit', editFormHandler);