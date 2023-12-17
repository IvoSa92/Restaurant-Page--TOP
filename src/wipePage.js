const wipePage = () => {
  const container = document.querySelector("#content");
  const actualContainer = document.querySelector(".actualContainer");
  container.removeChild(actualContainer);
};

export { wipePage };
