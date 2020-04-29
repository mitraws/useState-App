import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Timeout from "await-timeout";
import axios from "axios"

export default function ArticleList() {
  const [articles, set_articles] = useState([]);
 const [hidden, setHidden] = useState(false)

  useEffect(() => {
    async function doSomeDataFetching() {
        console.log("I'm gonna fetch some data!");
      
        // Getting back data from the net, through the wire, air, and the ocean:
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
        await Timeout.set(2000);
        console.log("Got back:", response);
        set_articles(response.data)
      } 
    doSomeDataFetching();
  }, []);


  const toggleHide = () => {
      setHidden(!hidden)
  }
  const articleCards = articles.map((articles) => (
    <ArticleCard
      key={articles.id}
      title={articles.title}
      content={articles.body}
    />
  ));
  return (
    <div>
      <button onClick={toggleHide}>Clear notifications</button>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {!hidden && articleCards}
    </div>
  );
}
