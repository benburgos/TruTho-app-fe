import { useEffect, useState } from 'react';

function Main(props) {
  const [board, setBoard] = useState(null);

  const URL = 'https://trutho-app-be.herokuapp.com/boards/';

  async function getBoards() {
    const data = await fetch(URL).then((response) => response.json());
    setBoard(data);
  }

  async function createBoard() {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(board),
    });
    getBoards();
  }

  async function updateBoard() {
    await fetch(URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(board),
    });
    getBoards();
  }

  async function deleteBoard() {
    await fetch(URL + id, {
      method: 'DELETE',
    });
    getPeople();
  }

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <main>
      <Routes>
        <Route></Route>
      </Routes>
    </main>
  );
}

export default Main;
