const { v4: uuidv4 } = require('uuid');

async function createAccountHandler(event) {
  event.preventDefault();

  const id = uuidv4();
  const first_name = document.querySelector('input[name="first"]').value.trim();
  const last_name = document.querySelector('input[name="last"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document
    .querySelector('input[name="password"]')
    .value.trim();
  const is_owner = true;

  if ((email, first_name, last_name, password)) {
    if (document.getElementById("own").checked) {
      const response = await fetch("/api/owners/", {
        method: "POST",
        body: JSON.stringify({
          id,
          first_name,
          last_name,
          email,
          password,
          is_owner,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // document.location.reload();
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  } 
}

document
  .querySelector(".create-account-form")
  .addEventListener("submit", createAccountHandler);
