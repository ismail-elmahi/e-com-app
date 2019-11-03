import styled from 'styled-components';
export const ButtonContainer = styled.button`
text-transform: capitalize;
background: transparent;
font-size: 1.4rem;
border:0.05rem solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
margin:4px;
transition: all 0.3s ease-in-out;
&:hover{
    background:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue)
}
&:focus{
    outline:none;
}
`;