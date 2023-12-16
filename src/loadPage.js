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

/* Also es geht weiter indem du die 2 buttons schreiben sollt welche 
auf 2 weitere seiten verweisen, wenn ein button gedrückt wird dann soll der
 content verschwinden un der neue content geladen werden*/
