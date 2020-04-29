import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import Timeout from "await-timeout";

export default function ArticleList() {
  const [articles, set_articles] = useState([
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ]);
  const articleCards = articles.map((articles) => (
    <ArticleCard
      key={articles.id}
      title={articles.title}
      content={articles.body}
    />));

    // useEffect(() => {
    //     async function waitForATimer() {
    //       console.log("A");
    //       await Timeout.set(2000); // time in milliseconds!
    //       console.log("B");
    //     }
    //     waitForATimer();
    //   }, [])
      
  return (
    <div>
      <button onClick={() => set_articles()}>Clear notifications</button>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articleCards}
    </div>
  );
}
