import React, { useState } from "react";

export default function AwesomeAnimals() {
  return (
<div><ul>
{["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
    (animal, index) => {
      return <li>Awesomeness level {index+1}: {animal}</li>;
    }
  )}
</ul>
</div>
  )}

