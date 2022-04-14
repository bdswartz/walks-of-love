async function completeJobHandler(event) {
  event.preventDefault();

  const id = event.target.getAttribute("data-id");

  const response = await fetch(`/api/jobs/complete/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      completed: true,
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
  .querySelectorAll(".complete-job-class")
  .forEach((el) => el.addEventListener("click", completeJobHandler));
