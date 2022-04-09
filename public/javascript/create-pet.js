async function commentFormHandler(event) {
  event.preventDefault();

  const pet_name = document
    .querySelector('input[name="pet-name"]')
    .value.trim();

  // this owner_id needs to be changed based off of who is logged in
  const owner_id = 1;

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
        owner_id,
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
