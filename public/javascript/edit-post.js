async function editFormHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const post_title = document.querySelector('input[name="post-title"]').value.trim();
    const post_contents = document.querySelector('textarea[name="post-contents"]').value.trim();
  
    if (post_title && post_contents) {
      console.log(post_title);
        const response = await fetch(`/api/posts/${post_id}`, {
          method: 'PUT',
          body: JSON.stringify({
            post_title,
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
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

