import React, { useState } from "react";

export default function LikeButton() {
    // const initial_numButton = "Like this";
    const [buttontext, set_buttontext] = useState(true); // <- using state!
    const changeButtonText = buttontext ? "Like this" : "You've liked this. Click to unlike"
     
  return (
    <div>
      <p>
  <button onClick= {()=>set_buttontext(!buttontext)}>{changeButtonText}</button>
      </p>
    </div>
  );
}
