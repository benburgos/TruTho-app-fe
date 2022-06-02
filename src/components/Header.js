import { Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
const { Brand, Item } = Navbar;

function Header(props) {
  return (
    <Navbar>
      <Brand>
        <Link to="/">
          <Item>TruTho</Item>
        </Link>
      </Brand>
    </Navbar>
  );
}

export default Header;
