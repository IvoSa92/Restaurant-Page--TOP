const loadPage = () => {
  const container = document.querySelector("#content");
  const actualContainer = document.createElement("div");
  actualContainer.className = "actualContainer";
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";

  const homeHeader = document.createElement("h1");
  homeHeader.innerHTML = "Mr Taco Heaven";
  homeHeader.classList.add("homeHeader");

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
  p.innerHTML =
    "Experience the Flavor of Mexico <br> Where Every Bite is an Adventure!";
  p.classList.add("homeP");

  buttonContainer.append(homeButton, menuButton, contactButton);
  actualContainer.append(homeImg, p);
  container.append(homeHeader, buttonContainer, actualContainer);
  return { menuButton, actualContainer };
};

export { loadPage };
