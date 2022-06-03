import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Card } from 'react-bulma-components';

function Show({ board, updateBoard, deleteBoard }) {
  const { id } = useParams();
  const thisBoard = board.find((board) => board._id === id);
  let navigate = useNavigate();

  const [state, setState] = useState(thisBoard);

  const handleChangeTask = (event) => {
    setState((prevState) => ({
      ...prevState.list,
    }))
  };

  const handleChangeList = (event) => {
    setState((prevState) => ({
      ...prevState,
      list: [...prevState.list, { listTitle: event.target.value }],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBoard(state, thisBoard._id);
  };

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

      <form onSubmit={handleSubmit}>
        <div className="showBoard-newList">
          <input
            type="text"
            placeholder="New List Name"
            name="listTitle"
            onChange={handleChangeList}
          />
          <button>Add New List</button>
        </div>
      </form>

      <div className="showList">
        {thisBoard.list.map((list) => (
          <div key={list._id} className="showList-item">
            <h3>{list.listTitle}</h3>
            <hr />
            {list.listCards.map((comments, index) => (
              <div key={index} className="showList-comment">
                <h4>{comments.cardComment}</h4>
              </div>
            ))}
            <form>
              <input
                type="text"
                placeholder="New Task Name"
                className={list._id}
                name="cardComment"
                onChange={handleChangeTask}
              />
              <button>Add Task</button>
            </form>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Show;
