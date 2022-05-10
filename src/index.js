import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const container = document.querySelector(".container");
const button = container.querySelector("button");
const list = container.querySelector("ul");

button.onclick = () => {
  const state = Flip.getState(container);
  list.classList.toggle("hidden");
  Flip.from(state);
};
