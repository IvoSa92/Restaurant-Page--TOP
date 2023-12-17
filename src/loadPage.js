const loadPage = () => {
  const container = document.querySelector("#content");

  const homeHeader = document.createElement("h1");
  homeHeader.innerHTML = "Mr Taco Heaven";

  const homeImg = document.createElement("img");
  homeImg.src = "../home.jpg";
  homeImg.style.width = "500px";

  const p = document.createElement("p");
  p.innerHTML = "Lets taste Heaven!";

  container.append(homeHeader, homeImg, p);
};

export { loadPage };
