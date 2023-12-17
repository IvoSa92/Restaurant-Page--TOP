const menu = () => {
  const container = document.querySelector("#content");
  const actualContainer = document.createElement("div");
  actualContainer.className = "actualContainer";

  const menuTitle = document.createElement("h1");
  menuTitle.innerHTML = "Burrito";

  const menuImg = document.createElement("img");
  menuImg.src = "../burrito.jpg";
  menuImg.style.width = "500px";

  const menuP = document.createElement("p");
  menuP.innerHTML = "Taste our delicious burritos";

  actualContainer.append(menuTitle, menuImg, menuP);

  container.append(actualContainer);
};

export { menu };
