async function commentFormHandler(event) {
  // const owner_id = req.session.user_id;
  event.preventDefault();

  const pet_name = document
    .querySelector('input[name="pet-name"]')
    .value.trim();

  const pet_type = document
    .querySelector('input[name="pet-type"]')
    .value.trim();

  const description = document
    .querySelector('textarea[name="about-pet"]')
    .value.trim();

  if (description) {
    const response = await fetch("/api/pets", {
      method: "POST",
      body: JSON.stringify({
        pet_name,
        pet_type,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".create-pet-form")
  .addEventListener("submit", commentFormHandler);
