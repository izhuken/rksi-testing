import { Slider } from "./slider";
import "./styles/slider.css";
import "./styles/style.css";

document.querySelector("#app").innerHTML = `
  <section class="slider-section">
    <div class="slider">
      <div class="control" id="control-prev">
        <img class="chevron" src="/icons/left-chevron.svg" />
      </div>
      <div class="container-image">
        <img src="nature/1.png" id="slider-image" />
      </div>
      <div class="control" id="control-next">
        <img class="chevron right" src="/icons/left-chevron.svg" />
      </div>
    <div>
  </section>
`;

const sliderImage = document.getElementById("slider-image");
const controlNext = document.getElementById("control-next");
const controlPrev = document.getElementById("control-prev");
const slider = new Slider();

controlNext?.addEventListener("click", () => {
  console.log(slider.next());
  sliderImage.src = `nature/${slider.next() + 1}.png`;
});

controlPrev?.addEventListener("click", () => {
  console.log(slider.prev());
  sliderImage.src = `nature/${slider.prev() + 1}.png`;
});
