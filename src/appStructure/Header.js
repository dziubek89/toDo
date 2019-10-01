import React from "react";
import "./style/Header.css";
import img1 from "../images/programing1.jpg";
import img2 from "../images/programing2.jpg";
import img3 from "../images/programing3.jpg";
import { Route } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Route
        path="/"
        exact
        render={() => <img src={img1} alt="coding" />}
      ></Route>
      <Route path="/toDoApp" render={() => <img src={img2} alt="coding" />} />
      <Route path="/next" render={() => <img src={img3} alt="coding" />} />
    </>
  );
};

export default Header;
