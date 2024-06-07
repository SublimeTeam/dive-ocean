const form = document.getElementById("subscription-form");
const nameInput = document.getElementById("name");

form.onsubmit = (event) => {
  event.preventDefault();
  const firstName = nameInput.value.trim().split(" ")[0];

  alert(`Obrigado pelo interesse ${firstName}, entraremos em contato!`);
};
