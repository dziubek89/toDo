import React from "react";
import { Route } from "react-router-dom";
import AboutMe from "../aboutMe/AboutMe";
import ToDoApp from "../toDoApp/ToDoApp";
import NextTask from "../NextTask/NextTask";

const Main = () => {
  return (
    <>
      <Route path="/" exact component={AboutMe} />
      <Route path="/toDoApp" component={ToDoApp} />
      <Route path="/next" component={NextTask} />
    </>
  );
};

export default Main;
