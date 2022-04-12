async function createAccountHandler(event) {
  event.preventDefault();

  const id = Math.floor(Math.random() * (200000000 - 1 + 1)) + 1;
  const first_name = document.querySelector('input[name="first"]').value.trim();
  const last_name = document.querySelector('input[name="last"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document
    .querySelector('input[name="password"]')
    .value.trim();
  // const is_owner = true;

  if ((id, first_name, last_name, email, password)) {
    if (document.getElementById("own").checked) {
      const response = await fetch("/api/owners/", {
        method: "POST",
        body: JSON.stringify({
          id,
          first_name,
          last_name,
          email,
          password,
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
