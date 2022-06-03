import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Card } from 'react-bulma-components';

function Show({ board, updateBoard, deleteBoard }) {
  const { id } = useParams();
  const thisBoard = board.find((board) => board._id === id);
  const thisList = thisBoard.find((list) => list._id)
  let navigate = useNavigate();

  const removeBoard = () => {
    deleteBoard(thisBoard._id);
    navigate('/');
  };

  return (
    <Card className="showBoard">
      <h2>{thisBoard.boardTitle}</h2>
      <div className="button-container">
        <input type="submit" value="Edit Board"></input>
        <input type="submit" value="Delete Board" onClick={removeBoard}></input>
      </div>
      <div className="showList">
        {thisBoard.list.map((list) => (
          <div key={list._id} className="showList-item">
            <h3>{list.listTitle}</h3>
            <hr />
            {list.listCards.map((comments) => (
              <div key={comments._id} className="showList-comment">
                <h4>{comments.cardComment}</h4>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Show;
