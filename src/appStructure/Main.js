import React from "react";
import { Route } from "react-router-dom";
import News from "../news/News";
import ToDoApp from "../toDoApp/ToDoApp";

const Main = () => {
  return (
    <>
      <Route path="/" exact component={News} />
      <Route path="/toDoApp" exact component={ToDoApp} />
    </>
  );
};

export default Main;
