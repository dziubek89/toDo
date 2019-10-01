import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./appStructure/Header";
import Footer from "./appStructure/Footer";
import Navigation from "./appStructure/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./appStructure/Main";

class App extends Component {
  state = {};
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header className="app-header">
            <Header />
          </header>
          <main className="body-container">
            <aside>
              <Navigation />
            </aside>
            <section className="blog">
              <Main />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
