import styled from "styled-components";
import { Link } from "react-router-dom";
import { Media } from "assets";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 800px;
  max-width: 95%;
  height: fit-content;
  backdrop-filter: blur(3px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: var(--radius);
  border: 1px solid var(--blackTransparent);
  position: relative;
  z-index: 99;
  box-shadow: var(--shadowThree);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Info = styled.div`
  width: 50%;

  @media (max-width: 700px) {
    width: 30%;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Form = styled.div`
  height: 100%;
  width: 50%;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  transition: var(--transition);

  h3 {
    margin: 20px 0;
  }

  .formPara {
    margin: 20px 0;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 12px;
      border-bottom: solid 1px var(--blackTransparent);
      width: 60px;
    }

    &::before {
      margin: 0 0 0 -70px;
    }

    &::after {
      margin: 0 0 0 10px;
    }
  }

  @media (max-width: 700px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin-left: -100px;
    width: 200px;
    height: 200px;
    background-image: url(${Media.controller});
    background-size: contain;
  }
`;

export const Intellect = styled.img`
  width: 100%;
  margin-bottom: -8px;
`;

export const LoginBtn = styled(Link)`
  display: block;
  margin: 10px 0;
  padding: 15px 25px;
  width: 100%;
  background: var(--blue);
  background: var(--gradientBlue);
  font-family: var(--font);
  color: var(--white);
  border-radius: 1000px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;

  &:last-of-type {
    background: var(--black);

    &:hover {
      filter: brightness(0.85);
    }
  }

  &:hover {
    filter: brightness(0.85);
    box-shadow: var(--shadowTwo);
  }
`;

export const IconWrapper = styled.span`
  float: left;
  margin-right: 5px;
`;
