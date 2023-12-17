const contact = () => {
  const container = document.querySelector("#content");
  const actualContainer = document.createElement("div");
  actualContainer.className = "actualContainer";

  const contactCard = document.createElement("div");
  contactCard.className = "contactCard";

  const contactName = document.createElement("h1");
  contactName.innerHTML = "Mr Taco Contact";

  const telephoneNumber = document.createElement("p");
  telephoneNumber.innerHTML = "937 380 943";

  const email = document.createElement("p");
  email.innerHTML = "taco@salsa.yes";

  const openingTime = document.createElement("div");
  openingTime.className = "openingTime";

  const time = document.createElement("p");
  time.innerHTML = "Open from: 6am to 2pm";

  contactCard.append(contactName, telephoneNumber.email);
  openingTime.append(time);
  actualContainer.append(contactCard, openingTime);
  container.appendChild(actualContainer);
};

export { contact };
