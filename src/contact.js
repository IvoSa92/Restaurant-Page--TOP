const contact = () => {
  const container = document.querySelector("#content");
  const actualContainer = document.createElement("div");
  actualContainer.className = "actualContainer";

  const contactName = document.createElement("h1");
  contactName.innerHTML = "Mr Taco Contact";

  const telephoneNumber = document.createElement("p");
  telephoneNumber.innerHTML = `Telephone: 789 666 878`;

  const email = document.createElement("p");
  email.innerHTML = `E-Mail: taco@salsa.yes`;

  const time = document.createElement("p");
  time.innerHTML = "Open from: 6am to 2pm";

  actualContainer.append(contactName, telephoneNumber, email, time);
  container.appendChild(actualContainer);
};

export { contact };
