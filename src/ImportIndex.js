import React, { Component } from "react";
import { fruits } from "./Food";
import { choice, remove } from "./Helper.js";

export class ImportIndex extends Component {
  render() {
    console.log("fruits", fruits);
    console.log("choice", choice(fruits));
    console.log("remove", remove(fruits, "🍉"));
    const randomFruit = choice(fruits);
    const fruitsLeft= remove(fruits,randomFruit)
    return <div className="Fruits">
        <h3>I’d like one {randomFruit}, please.</h3>
        <h3>Here you go: {randomFruit}</h3>
        <h3>Delicious! May I have another?</h3>
        <h3>I’m sorry, we’re all out. We have {fruitsLeft} left</h3>
    </div>;
  }
}

export default ImportIndex;
