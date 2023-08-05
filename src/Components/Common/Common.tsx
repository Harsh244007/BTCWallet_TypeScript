import {
  SpinnerElement,
  DocumentWithQuerySelector,
  BodyWithClassList,
} from './Types';

const HideLandingLoader = () => {
  const spinner = document.querySelector(".Spinner_BG") as SpinnerElement;
  if (spinner) {
    spinner.style.display = "none";
  }

  const body = document.querySelector("body") as BodyWithClassList;
  if (body.classList.contains("Spinner_Default")) {
    body.classList.remove("Spinner_Default");
  }
};

export { HideLandingLoader };
