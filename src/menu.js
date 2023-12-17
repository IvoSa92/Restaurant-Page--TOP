const menu = () => {
  const container = document.querySelector("#content");
  const menuContainer = document.createElement("div");
  menuContainer.className = "menuContainer";

  const menuTitle = document.createElement("h1");
  menuTitle.innerHTML = "Burrito";

  const menuImg = document.createElement("img");
  menuImg.src = "../burrito.jpg";
  menuImg.style.width = "500px";

  const menuP = document.createElement("p");
  menuP.innerHTML = "Taste our delicious burritos";

  menuContainer.append(menuTitle, menuImg, menuP);

  container.append(menuContainer);
};

export { menu };
