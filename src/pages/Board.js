import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Card } from 'react-bulma-components';

function Show({ board, updateBoard, deleteBoard }) {
  const { id } = useParams();
  const thisBoard = board.find((board) => board._id === id);
  let navigate = useNavigate();

  const [editForm, setEditForm] = useState(thisBoard);

  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBoard(editForm, thisBoard._id);
    navigate('/');
  };

  const removeBoard = () => {
    deleteBoard(thisBoard._id);
    navigate('/');
  };

  return (
    <Card className="showBoard">
      <h2>{thisBoard.boardTitle}</h2>
      <div className="button-container">
        <input type="submit" value="Edit Board"></input>
        <input type="submit" value="Delete Board"></input>
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
            <form>
              <input type="text" name="cardComment" />
              <button>Submit</button>
            </form>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Show;
