import { CardView } from "./components/card";

const data = [
  {
    image: "/dishes/filter.png",
    title: "Tea filter",
    place: "Китай",
    cost: "10.00"
  },
  {
    image: "/dishes/teapot.png",
    title: "Teapot",
    place: "Китай",
    cost: "10.00"
  },
  {
    image: "/dishes/thermometer.png",
    title: "Thermometer",
    place: "Китай",
    cost: "10.00"
  },
  {
    image: "/dishes/timer.png",
    title: "Timer",
    place: "Китай",
    cost: "10.00"
  }
];

document.querySelector("#dishes").innerHTML = data.reduce(
  (acc, cv) => acc + CardView(cv),
  ""
);
