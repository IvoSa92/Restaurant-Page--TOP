const loadPage = () => {
  const container = document.querySelector("#content");
  const actualContainer = document.createElement("div");
  actualContainer.className = "actualContainer";
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";

  const homeHeader = document.createElement("h1");
  homeHeader.innerHTML = "Mr Taco Heaven";

  const menuButton = document.createElement("button");
  menuButton.innerHTML = "Menu";
  menuButton.className = "menuButton";

  const homeButton = document.createElement("button");
  homeButton.className = "homeButton";
  homeButton.innerHTML = "Home";

  const contactButton = document.createElement("button");
  contactButton.innerHTML = "Contact";
  contactButton.className = "contactButton";

  const homeImg = document.createElement("img");
  homeImg.className = "homeImg";
  homeImg.src = "../home.jpg";

  const p = document.createElement("p");
  p.innerHTML = "Lets taste Heaven!";

  buttonContainer.append(homeButton, menuButton, contactButton);
  actualContainer.append(homeImg, p);
  container.append(homeHeader, buttonContainer, actualContainer);
  return { menuButton, actualContainer };
};

export { loadPage };
