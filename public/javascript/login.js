async function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector("#emailA").value.trim();
  const password = document.querySelector("#user_passwordA").value.trim();
  try {
    if (email && password) {
      const response = await fetch("/api/owners/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        // alert(response.statusText);
      }
    }
  } catch (error) {
    console.error(`Oh No!`);
  }
  // const loadPage = await console.log("Test");
}

document.querySelector(".signIn").addEventListener("click", loginFormHandler);
