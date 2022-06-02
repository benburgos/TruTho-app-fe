import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Media, Heading, Content } from 'react-bulma-components';

function Index({ board, createBoard }) {
  const [newBoard, setNewBoard] = useState({
    boardTitle: '',
  });

  const handleChange = (event) => {
    setNewBoard((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBoard(newBoard);
    setNewBoard({
      _id: '',
      boardTitle: '',
      list: [],
    });
  };

  const formatDate = (date) => {
    let formattedDate = new Date(date);
    return formattedDate.toLocaleString('en-US');
  };

  const loaded = () => {
    return board.map((board) => (
      <Card key={board._id} className="board">
        <Card.Content>
          <div className="card-heading">
            <Media>
              <Media.Item>
                <Link to={`/boards/${board._id}`}>
                  <Heading size={4}>{board.boardTitle}</Heading>
                </Link>
                <time>Created: {formatDate(board.createdAt)}</time>
              </Media.Item>
            </Media>
          </div>
          <Content>
            {board.list.length} Lists | {} Comments
          </Content>
        </Card.Content>
      </Card>
    ));
  };

  const loading = () => {
    return <div className="loader"></div>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Card className="create-board">
          <Card.Content>
            <Media>
              <Media.Item>+ Create New Board</Media.Item>
            </Media>
            <input
              type="text"
              value={newBoard.boardTitle}
              name="boardTitle"
              placeholder="Board Title"
              onChange={handleChange}
            />
            <input type="submit" value="Create Board" />
          </Card.Content>
        </Card>
      </form>
      {board ? loaded() : loading()}
    </section>
  );
}

export default Index;
