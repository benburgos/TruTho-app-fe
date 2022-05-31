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
    </Navbar>
  );
}

export default Header;
