// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

import animals from "./data";

const [cat, dog] = animals;
/**
console.log(dog);

const { name: catName, sound: catSound } = cat;

const { name = "fluffy", sound = "Purrr" } = cat;

console.log(catSound);*/

const {
  name,
  sound,
  feedingRequierments: { food, water }
} = cat;

console.log(food);

/** ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);*/
