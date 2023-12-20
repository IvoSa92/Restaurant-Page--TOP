const contact = () => {
  const container = document.querySelector("#content");
  const actualContainer = document.createElement("div");
  actualContainer.className = "actualContainer";

  const contactName = document.createElement("h1");
  contactName.innerHTML = "Mr Taco Contact";
  contactName.classList.add("contactName");

  const telephoneNumber = document.createElement("p");
  telephoneNumber.innerHTML = `Telephone: 789 666 878`;
  telephoneNumber.classList.add("telephoneNumber");

  const email = document.createElement("p");
  email.innerHTML = `E-Mail: taco@salsa.yes`;
  email.classList.add("eMail");

  const time = document.createElement("p");
  time.innerHTML = "Open from: 6am to 2pm";
  time.classList.add("time");

  actualContainer.append(contactName, telephoneNumber, email, time);
  container.appendChild(actualContainer);
};

export { contact };
