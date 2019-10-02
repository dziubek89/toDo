import React, { Component } from "react";
import "./style/Memory.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.jpg";
import CreateBoard from "./CreateBoard";

class App extends Component {
  state = {
    board: [
      {
        id: 1,
        img: img1,
        active: "",
        name: "steam",
        disabled: false
      },
      {
        id: 2,
        img: img1,
        active: "",
        name: "steam",
        disabled: false
      },
      {
        id: 3,
        img: img2,
        active: "",
        name: "bird",
        disabled: false
      },
      {
        id: 4,
        img: img2,
        active: "",
        name: "bird",
        disabled: false
      },
      {
        id: 5,
        img: img3,
        active: "",
        name: "phone",
        disabled: false
      },
      {
        id: 6,
        img: img3,
        active: "",
        name: "phone",
        disabled: false
      },
      {
        id: 7,
        img: img4,
        active: "",
        name: "instagram",
        disabled: false
      },
      {
        id: 8,
        img: img4,
        active: "",
        name: "instagram",
        disabled: false
      },
      {
        id: 9,
        img: img5,
        active: "",
        name: "elder",
        disabled: false
      },
      {
        id: 10,
        img: img5,
        active: "",
        name: "elder",
        disabled: false
      },
      {
        id: 11,
        img: img6,
        active: "",
        name: "tree",
        disabled: false
      },
      {
        id: 12,
        img: img6,
        active: "",
        name: "tree",
        disabled: false
      }
    ],
    startTime: 1,
    finalTime: undefined
  };
  // componentDidMount() {
  //   let newBoard = this.state.board;
  //   for (let i = newBoard.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * i);
  //     const temp = newBoard[i];
  //     newBoard[i] = newBoard[j];
  //     newBoard[j] = temp;
  //   }
  //   this.setState({ board: newBoard });
  // }

  mixTiles() {
    let newBoard = this.state.board;
    for (let i = newBoard.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = newBoard[i];
      newBoard[i] = newBoard[j];
      newBoard[j] = temp;
    }
    this.setState({ board: newBoard });
  }

  //start button
  startButton = () => {
    const startTime = new Date().getTime();
    let board = this.state.board.map(item => (item.active = "hide"));
    this.setState({ startTime });
    this.mixTiles();
  };

  //checking it first or second click
  checkTiles = e => {
    const boardLength = this.state.board.filter(
      item => item.active === "reveal"
    );

    //first click
    if (boardLength.length === 0) {
      //reveal tiles changing class of element
      const board = this.state.board.map(item => {
        if (item.id === e) {
          //class reveal and disabled onclick
          item.active = "reveal";
          item.disabled = true;
          return item;
        } else return item;
      });
      this.setState({ board });
      //second click
    } else if (boardLength.length === 1) {
      const board = this.state.board.map(item => {
        if (item.id === e) {
          //class reveal and disable onclick
          item.active = "reveal";
          item.disabled = true;
          return item;
        } else return item;
      });
      //update board and go to checkwin function
      this.setState({ board });
      this.checkWin();
    }
  };

  //check win start end game function
  checkWin = () => {
    let board = this.state.board;
    let checkBoard = this.state.board.filter(item => item.active === "reveal");
    setTimeout(() => {
      //if tiles are the same make class disable
      if (checkBoard[0].name === checkBoard[1].name) {
        board = board.map(item => {
          if (item.active === "reveal") {
            item.active = "disabled";
            return item;
          } else return item;
        });
        this.setState({ board });
        //start end game function
        this.endGame();
      } else {
        //if there are different make class hide and enable onclick
        board = board.map(item => {
          if (item.active === "reveal") {
            item.active = "hide";
            item.disabled = false;
            return item;
          } else return item;
        });
        this.setState({ board });
      }
    }, 1000);
  };

  //checking that game is over
  endGame = () => {
    let winBoard = this.state.board.filter(item => item.active === "disabled");
    let board = this.state.board;
    if (winBoard.length === 12) {
      const endTime = new Date().getTime();
      const finalTime = (endTime - this.state.startTime) / 1000;
      board = board.map(item => {
        item.active = "";
        item.disabled = false;
        return finalTime;
      });
      this.setState({ finalTime });
    }
  };

  render() {
    const { board, finalTime } = this.state;

    return (
      <main>
        <div className="but-div">
          <h3>Memory Game try it out</h3>

          <button className="game-btn" onClick={this.startButton}>
            Start
          </button>
        </div>
        <br />
        <section className="board">
          <CreateBoard checkTiles={this.checkTiles} board={board} />
        </section>
        <br />
        {finalTime ? (
          <h3>Congratulation your time: {finalTime} second</h3>
        ) : null}
      </main>
    );
  }
}

export default App;
