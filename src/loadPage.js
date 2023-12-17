const loadPage = () => {
  const container = document.querySelector("#content");
  const homeContainer = document.createElement("div");
  homeContainer.className = "homeContainer";
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

  const homeImg = document.createElement("img");
  homeImg.className = "homeImg";
  homeImg.src = "../home.jpg";

  const p = document.createElement("p");
  p.innerHTML = "Lets taste Heaven!";

  buttonContainer.append(homeButton, menuButton);
  homeContainer.append(homeImg, p);
  container.append(homeHeader, buttonContainer, homeContainer);
  return { menuButton, homeContainer };
};

export { loadPage };
