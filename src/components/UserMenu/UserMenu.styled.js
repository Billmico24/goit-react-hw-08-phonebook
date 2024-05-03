import styled from "@emotion/styled";

export const SubmitButton = styled.button` 
width: 80px;
margin: 0 auto;
padding: 5px;
font-weight: 500;
text-transform: uppercase;
border: none;
color: rgb(45, 45, 45);
border-radius: 5px;
box-shadow: ${props => props.theme.filters.shadow};
background-color: rgb(242, 191, 94, 0);

:hover {
    background-color: rgba(192, 198, 230, 0.3);
}

:active {
    transform: translateY(1px);
}

`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

 export const Username = styled.p` 
    font-weight: 700;
`