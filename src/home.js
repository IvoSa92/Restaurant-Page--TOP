const home = () => {
  const container = document.querySelector("#content");
  const actualContainer = document.createElement("div");
  actualContainer.className = "actualContainer";

  const homeImg = document.createElement("img");
  homeImg.className = "homeImg";
  homeImg.src = "../home.jpg";

  const p = document.createElement("p");
  p.innerHTML = "Lets taste Heaven!";

  actualContainer.append(homeImg, p);

  container.append(actualContainer);
};

export { home };
