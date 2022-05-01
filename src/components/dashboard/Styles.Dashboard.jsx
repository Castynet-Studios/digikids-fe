import styled from "styled-components";

export const Dash = styled.div`
    width: 85%;
    height: 100vh;
    position: absolute;
    left: 15%;
    top: 52px;
    padding: 50px 30px 0;

    @media (max-width: 1080px) {
        width: 100%;
        left: 0;   
    }
`
export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const Intro = styled.div`
    width: 51%;
    height: 79.29px;
    color: var(--black);
    font-weight: 400;
`;
export const Search = styled.div`
    width: 35%;
    height: 51.47px;
    background: var(--white);
    border: 1px solid #ABAEAF;
    box-sizing: border-box;
    border-radius: 16.6924px;
    padding: 10px 20px;
    display: flex;

    .searchBar{
        border: none;
        outline: none;
        width: 90%;

        &::placeholder{
            font-size: 14;
            font-weight: 900;
            color: #ABAEAF;
          }
      }
      
`;
export const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0 0;
`;
export const MiddleLeft = styled.div`
    width: 70%;
    height: 224.65px;
    background: var(--white);
    border-radius: 22.2565px;
    text-align: center;
    position: relative;

`;
export const MiddleRight = styled.div`
    width: 27%;
    height: 224.65px;
    background: var(--white);
    border-radius: 22.2565px;
    text-align: center;
    position: relative;

`;
export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0 0;

`;
export const BottomLeft = styled.div`
    width: 27%;
    height: 195.44px;
    background: var(--white);
    border-radius: 22.2565px;
    text-align: center;
    position: relative
`;
export const BottomRight = styled.div`
    width: 70%;
    height: 195.44px;
    background: var(--white);
    border-radius: 22.2565px;
    text-align: center;
    position: relative;
`;
export const Title = styled.div`
    position: absolute;
    top: 6%;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid var(--grey);
    padding: 3px 25px;
    font-weight: 700;
    color: var(--blackTwo);
`;
export const Courses = styled.div`
    position: absolute;
    top: 61.9px;
    left: 24.35px;
    width: 93%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Course = styled.div`
    width: 18%;
    height: 111.28px;
    background: rgba(154,179,245, .1);
    border-radius: 10.4327px;
    font-size: 15px;

    &:last-of-type{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;