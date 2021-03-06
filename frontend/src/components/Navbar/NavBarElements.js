import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
color: black;
font-size: 1.15rem;
display: flex;
align-items: center;
justify-items:center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color: #15cdfc;
}
`;
