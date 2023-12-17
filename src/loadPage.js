const loadPage = () => {
  const container = document.querySelector("#content");

  const homeHeader = document.createElement("h1");
  homeHeader.innerHTML = "Mr Taco Heaven";

  const menuButton = document.createElement("button");
  menuButton.innerHTML = "Menu";
  menuButton.className = "menuButton";

  const homeImg = document.createElement("img");
  homeImg.src = "../home.jpg";
  homeImg.style.width = "500px";

  const p = document.createElement("p");
  p.innerHTML = "Lets taste Heaven!";

  container.append(homeHeader, menuButton, homeImg, p);
  return menuButton;
};

export { loadPage, container };
