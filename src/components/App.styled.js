import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MainContainer = styled.div`
    min-height: 100vh;
    max-height: 100%;
    padding: 10px;
    text-align: center;
    background-image: ${props => props.theme.gradients.vanilla};
  
`;

export const Link = styled(NavLink)`

`;