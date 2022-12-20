import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { NavbarDiv, IconButton, Title, IconSearch } from './styles';
const Navbar = () => {
  return (
    <NavbarDiv>
      <IconButton>
        {' '}
        <RxHamburgerMenu size={20} />{' '}
      </IconButton>
      <Title>Mi pastillero</Title>
      <IconSearch>
        {' '}
        <AiOutlineSearch size={20} />
      </IconSearch>
      <IconSearch>
        {' '}
        <FaShoppingCart size={20} />
      </IconSearch>
    </NavbarDiv>
  );
};

export default Navbar;
