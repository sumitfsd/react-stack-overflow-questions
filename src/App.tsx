import React from "react";
import "./styles.css";
import Header from "./components/Header";
import QuestionsList from "./components/questions/list/List";

const App = () => (
  <div className="App">
    <Header />
    <QuestionsList />
  </div>
);

export default App;
