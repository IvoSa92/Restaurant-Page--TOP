import { container } from "./loadPage";

const wipePage = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

export { wipePage };
