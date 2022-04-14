async function deleteJobHandler(event) {
  event.preventDefault();

  const id = event.target.getAttribute("data-id");

  const response = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
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
  .querySelectorAll(".delete-job-class")
  .forEach((el) => el.addEventListener("click", deleteJobHandler));
