import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Card } from 'react-bulma-components';

function Show({ board, updateBoard, deleteBoard }) {
  const { id } = useParams();
  const thisBoard = board.find((board) => board._id === id);
  let navigate = useNavigate();
  
  const removeBoard = () => {
    deleteBoard(thisBoard._id);
    navigate('/');
  };

  return (
    <Card className="showBoard">
      <h2>{thisBoard.boardTitle}</h2>
      <div className="button-container">
        <input type="submit" value="Edit Board" />
        <input type="submit" value="Delete Board" onClick={removeBoard}></input>
      </div>
      <div className="showList">
        {thisBoard.list.map((list, index) => (
          <div key={index} className="showList-item">
            <h3>{list.listTitle}</h3>
            <hr />
            {list.listCards.map((comments, index) => (
              <div key={index} className="showList-comment">
                <h4>{comments.cardComment}</h4>
              </div>
            ))}
            <input type='text' />
            <button>Add Task</button>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Show;
