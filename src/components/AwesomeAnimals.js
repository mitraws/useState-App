import React, { useState } from "react";

export default function AwesomeAnimals() {
  return (
    <div>
      {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
        (animal) => {
          return <ul>
              <li><p>Awesomeness level 1: {animal}</p></li>
              </ul>
        }
      )}
    </div>
  );
}

{/* <ul>
  <li>Awesomeness level 1: Chicken</li>
  <li>Awesomeness level 2: Sloth</li>
  <li>Awesomeness level 3: Porcupine</li>
  <li>Awesomeness level 4: Killer whale</li>
  <li>Awesomeness level 5: Velociraptor</li>
</ul>; 

const toRenderAnimals = animals.map((animal, index) => <li>Awesomeness level: {1+ index} {animal}</li>*/}
