const wipePage = () => {
  const container = document.querySelector("#content");
  const homeContainer = document.querySelector(".homeContainer");
  container.removeChild(homeContainer);
};

export { wipePage };
