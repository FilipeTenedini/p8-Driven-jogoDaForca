import styled from "styled-components";

export const Container = styled.div`
    height: 400px;
    width: 100%;
    max-width: 1100px;
    display: flex;
    margin-bottom: 20px;
`;
export const HangmanImage = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Image = styled.img`
    width: 400px;
    height: 390px;
`
export const GameSpace = styled.div`
    flex: 1;
    position: relative;

`;
export const ChoiceBtn = styled.button`
    width: 200px;
    height: 60px;
    background: #27AE60;
    border-radius: 8px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #fff;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 35px;
`;
export const WordSpace = styled.div`
    position: absolute;
    bottom: 10px;
    right: 20px;
    font-weight: 700;
    font-size: 50px;
    line-height: 68px;
    letter-spacing: 10px;
    color: ${({color}) => color}
`;
