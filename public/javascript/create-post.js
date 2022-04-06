async function newFormHandler(event) {
    event.preventDefault();
    console.log("Button Hit")
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_contents = document.querySelector('textarea[name="post-contents"]').value.trim();
    console.log(title)
    console.log(post_contents);
    if (title && post_contents) {
      const response = await fetch(`/api/posts`, {
        method: 'POST', 
        body: JSON.stringify({
          title,
          post_contents
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
  }
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  