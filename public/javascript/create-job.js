async function createPostHandler(event) {
  event.preventDefault();

  const payStr = document.querySelector('input[name="pay"]').value.trim();
  const pay = parseInt(payStr);

  const dateStart = document.getElementById("date-start").value;
  const hourStart = document.getElementById("hour-start").value;
  const timeframe = dateStart + "T" + hourStart + "Z";

  const locationStr = document
    .querySelector('input[name="location"]')
    .value.trim();
  const location = parseInt(locationStr);

  var visitType = document.getElementById("visit-type");
  var selectedValue = visitType.options[visitType.selectedIndex].value;
  if (selectedValue == "Walk") {
    walk = true;
    check_in = false;
  } else {
    walk = false;
    check_in = true;
  }

  if ((pay, location, timeframe)) {
    const response = await fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify({
        pay,
        check_in,
        walk,
        timeframe,
        location,
        completed: false,
        owner_id: 1,
        walker_id: null,
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

async function pastJobsHandler(event) {
  alert("it worked!");

  event.preventDefault();
  const response = await fetch("/api/jobs", (req, res) => {
    Job.findAll({
      // order: [['timeframe', 'DESC']],
      where: {
        owner_id: 1,
        completed: true,
      },
      include: [
        {
          model: Pets,
          attributes: ["pet_name", "pet_type", "description", "owner_id"],
        },
        {
          model: Owner,
          attributes: ["first_name", "last_name"],
        },
      ],
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  });
}

document
  .querySelector(".past-jobs-tab")
  .addEventListener("click", pastJobsHandler);
