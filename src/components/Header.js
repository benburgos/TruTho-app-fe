import { Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';

function Header(props) {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item href="#">
          TruTho
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container align="end">
          <Navbar.Item href="#">At the end</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default Header;
