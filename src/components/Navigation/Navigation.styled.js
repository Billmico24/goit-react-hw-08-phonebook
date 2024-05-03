import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';



export const Link = styled(NavLink) `
  display: inline-block;
  text-decoration: none;
  padding: 5px 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    text-shadow: 1px 1px 1px grey;
    color: rgb(255, 255, 255);
  }
`
