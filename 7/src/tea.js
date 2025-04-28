import { CardView } from "./components/card";

const data = [
  {
    image: "/tea/golden-snail.png",
    title: "Golden snail",
    place: "Китай",
    cost: "10.00"
  },
  {
    image: "/tea/hou-shan.png",
    title: "Hou shan",
    place: "Китай",
    cost: "10.00"
  },
  {
    image: "/tea/jasmin-high-grade.png",
    title: "Jasmin high grade",
    place: "Китай",
    cost: "10.00"
  },
  {
    image: "/tea/pu-erh.png",
    title: "Pu erh",
    place: "Китай",
    cost: "10.00"
  }
];

document.querySelector("#tea").innerHTML = data.reduce(
  (acc, cv) => acc + CardView(cv),
  ""
);
