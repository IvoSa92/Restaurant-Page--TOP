/*const menu = () => {
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
export { menu };*/

const menu = () => {
  const container = document.querySelector("#content");
  const actualContainer = document.createElement("div");
  actualContainer.className = "actualContainer";
  actualContainer.setAttribute("id", "menuContainer");

  const createMenu = (title, url, p) => {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");

    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("menuTitle");
    menuTitle.innerHTML = title;

    const menuImg = document.createElement("img");
    menuImg.classList.add("menuImg");
    menuImg.src = `../${url}`;

    const menuP = document.createElement("p");
    menuP.classList.add("menuP");
    menuP.innerHTML = p;

    menuDiv.append(menuTitle, menuImg, menuP);
    actualContainer.appendChild(menuDiv);

    container.append(actualContainer);
  };

  const menu1 = createMenu(
    "~Burrito~",
    "burrito.jpg",
    "A delicious symphony of fresh meat, beans and a salsa sauce !"
  );
  const menu2 = createMenu(
    "~Enchilada~",
    "enchilada.jpg",
    "Taste this also pls"
  );
};
export { menu };

/*class Menu {
  constructor() {
    this.container = document.querySelector("#content");
    this.actualContainer = document.createElement("div");
    this.actualContainer.className = "actualContainer";
  }

  createMenu(title, img, p) {
    const menuTitle = document.createElement("h1");
    menuTitle.innerHTML = title;

    const menuImg = document.createElement("img");
    menuImg.src = `../${img}`;

    const menuP = document.createElement("p");
    menuP.innerHTML = p;

    this.actualContainer.append(menuTitle, menuImg, menuP);

    this.container.append(this.actualContainer);
  }
}

export { Menu };*/
