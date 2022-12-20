import styled from 'styled-components';
import '@fontsource/poppins';

export const NavbarDiv = styled.nav`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: #ffffff;
  background: #0277bd;
  padding: 4%;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.75);
`;

export const IconButton = styled.button`
  margin-right: 3%;
  background: #0277bd;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const IconSearch = styled.button`
  margin-left: 3%;
  background: #0277bd;
  border: none;
  color: #ffffff;
  cursor: pointer;
  right: 555px;
`;
export const Title = styled.span`
  width: 100%;
`;
