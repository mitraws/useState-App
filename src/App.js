import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
// import AwesomeAnimals from "./components/AwesomeAnimals"
import ArticleList from "./components/ArticleList"


function App() {
  return (
    <main>
      <LikeCounter />
      <LikeButton />
      {/* <AwesomeAnimals /> */}
      <ArticleList />
    </main>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
