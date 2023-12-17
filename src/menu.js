const menu = () => {
  const container = document.querySelector("#content");

  const menuTitle = document.createElement("h1");
  menuTitle.innerHTML = "Burrito";

  const menuImg = document.createElement("img");
  menuImg.src = "../burrito.jpg";
  menuImg.style.width = "500px";

  const menuP = document.createElement("p");
  menuP.innerHTML = "Taste our delicious burritos";

  container.append(menuTitle, menuImg, menuP);
};

export { menu };
