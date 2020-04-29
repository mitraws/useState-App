import React, { useState } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  //   const increment = () => {
  //     console.log("Yes, clicked! Current number of likes:", numLikes);
  //     ;
  //   };

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={()=>set_numLikes(numLikes+1)} >Like</button>
        <button onClick={()=>set_numLikes(initial_numLikes)}>Reset</button>
      </p>
    </div>
  );
}
