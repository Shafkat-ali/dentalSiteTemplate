const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const procedures = document.querySelectorAll(".procedure[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    procedures.forEach((procedure) => {
      const shouldShow = filter === "all" || procedure.dataset.category === filter;
      procedure.hidden = !shouldShow;
    });
  });
});

const appointmentForm = document.querySelector("#appointmentForm");
const formMessage = document.querySelector("#formMessage");
const savedRequest = document.querySelector("#savedRequest");

function renderSavedRequest() {
  if (!savedRequest) return;

  const request = JSON.parse(localStorage.getItem("clearwaveAppointment") || "null");
  if (!request) return;

  savedRequest.innerHTML = `
    <strong>Latest request</strong>
    <p><b>${request.name}</b> requested a ${request.reason.toLowerCase()} on ${request.day}.</p>
    <p>${request.phone} | ${request.email}</p>
  `;
}

if (appointmentForm) {
  renderSavedRequest();

  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(appointmentForm);
    const request = Object.fromEntries(formData.entries());
    localStorage.setItem("clearwaveAppointment", JSON.stringify(request));

    appointmentForm.reset();
    renderSavedRequest();

    if (formMessage) {
      formMessage.textContent = "Request saved for demo. Connect this form to your preferred backend for production.";
    }
  });
}
