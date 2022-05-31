import { Navbar } from 'react-bulma-components';
const { Brand, Item } = Navbar;

function Header(props) {
  return (
    <Navbar>
      <Brand>
        <Item href="#">TruTho</Item>
      </Brand>
    </Navbar>
  );
}

export default Header;
