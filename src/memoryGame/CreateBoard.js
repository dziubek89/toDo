import React from "react";

const CreateBoard = props => {
  const createBoard = props.board.map(item => (
    <div
      onClick={item.disabled ? null : () => props.checkTiles(item.id)}
      key={item.id}
    >
      <img className={item.active} src={item.img} alt="me"></img>
    </div>
  ));
  return createBoard;
};

export default CreateBoard;
