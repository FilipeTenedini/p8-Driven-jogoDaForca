import styled from "styled-components"

export const Character = styled.button`
    width: 40px;
    height: 40px;
    background: ${({disabled}) => disabled ? "#798A9F": "#E1ECF4" };
    color: #7AA7C7;
    font-weight: 700;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${({disabled}) => disabled ? "default" : "pointer"};
`