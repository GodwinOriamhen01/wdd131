const form = document.querySelector("#ticketForm");
const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const messages = document.querySelector("#messages");

// Show correct field based on type
typeSelect.addEventListener("change", () => {
  const type = typeSelect.value;

  if (type === "student") {
    extraLabel.textContent = "Student I#";
    extraInput.placeholder = "Enter 9-digit I#";
    extraField.hidden = false;
  } else if (type === "guest") {
    extraLabel.textContent = "Access Code";
    extraInput.placeholder = "EVENT131";
    extraField.hidden = false;
  } else {
    extraField.hidden = true;
  }
});

// Validate date
function isPastDate(dateValue) {
  const today = new Date();
  const chosen = new Date(dateValue);
  return chosen <= today;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  messages.innerHTML = "";

  const first = document.querySelector("#firstName").value.trim();
  const last = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const type = typeSelect.value;
  const date = document.querySelector("#eventDate").value;
  const extra = extraInput.value.trim();

  // Error checks
  if (isPastDate(date)) {
    messages.innerHTML = `<div id="error">Event date must be later than today</div>`;
    return;
  }

  if (type === "student") {
    if (!/^[0-9]{9}$/.test(extra)) {
      messages.innerHTML = `<div id="error">Student I# must be 9 digits</div>`;
      return;
    }
  }

  if (type === "guest") {
    if (extra !== "EVENT131") {
      messages.innerHTML = `<div id="error">Access Code must be EVENT131</div>`;
      return;
    }
  }

  // Success
  messages.innerHTML = `
    <div id="success">
      <h2>Ticket Created</h2>
      <p>${first} ${last}</p>
      <p>${type}</p>
      <p>${date}</p>
    </div>
  `;

  form.reset();
  extraField.hidden = true;
});
