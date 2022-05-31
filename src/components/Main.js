import { useEffect, useState } from 'react';
import { Card, Media, Heading, Content } from 'react-bulma-components';

function Main(props) {
  const [board, setBoard] = useState(null);

  const URL = 'https://trutho-app-be.herokuapp.com/boards/';

  async function getBoards() {
    const data = await fetch(URL).then((response) => response.json());
    setBoard(data);
  }

  // async function createBoard() {
  //   await fetch(URL, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'Application/json' },
  //     body: JSON.stringify(board),
  //   });
  //   getBoards();
  // }

  // async function updateBoard() {
  //   await fetch(URL, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'Application/json' },
  //     body: JSON.stringify(board),
  //   });
  //   getBoards();
  // }

  // async function deleteBoard() {
  //   await fetch(URL + id, {
  //     method: 'DELETE',
  //   });
  //   getPeople();
  // }

  const loaded = () => {
    return board.map((board) => (
      <Card key={board._id}>
        <Card.Content>
          <Media>
            <Media.Item>
              <Heading size={4}>{board.boardTitle}</Heading>
              <time dateTime="2016-1-1">Created 12/31/22</time>
            </Media.Item>
          </Media>
          <Content>
            {board.list.length} Lists | {} Comments
          </Content>
        </Card.Content>
      </Card>
    ));
  };

  const loading = () => {
    return <div className='loader'></div>;
  };

  useEffect(() => {
    getBoards();
  }, []);

  return <main>{board ? loaded() : loading()}</main>;
}

export default Main;
