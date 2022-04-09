async function createPostHandler(event) {
  event.preventDefault();
  console.log("TETSTSTSTSTSTSTSTSTSTSTSTSTSTSTSSSSSSSSSSSST");
  if (1 === 1) {
    const response = await fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify({
        pay: 420,
        check_in: false,
        walk: true,
        timeframe: 5649290473,
        location: 27407,
        completed: false,
        owner_id: 1,
        walker_id: 1,
        animal_id: 1,
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
  .querySelector(".create-job-form")
  .addEventListener("submit", createPostHandler);
