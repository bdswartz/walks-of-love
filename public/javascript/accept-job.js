async function acceptJobHandler(event) {
  event.preventDefault();
  const id = event.target.getAttribute("data-id");
  console.log(id);
  const res = await fetch("/api/walkers/walkerid", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const walker_id = await res.json();
  console.log(walker_id.walkerId);

  const response = await fetch(`/api/jobs/accept/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      walker_id: walker_id.walkerId,
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
document
  .querySelectorAll(".accept-job-class")
  .forEach((el) => el.addEventListener("click", acceptJobHandler));
