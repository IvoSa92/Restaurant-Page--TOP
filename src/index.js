console.log("hello");

import { loadPage } from "./loadPage";
import { menu } from "./menu";
import { wipePage } from "./wipePage";
import { home } from "./home";

const container = document.querySelector("#content");

loadPage();

let menuTab = document.querySelector(".menuButton");
menuTab.addEventListener("click", () => {
  wipePage();
  menu();
});

let homeTab = document.querySelector(".homeButton");
homeTab.addEventListener("click", () => {
  wipePage();
  home();
});
