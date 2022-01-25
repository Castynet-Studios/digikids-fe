import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100%;
  width: 50%;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  transition: var(--transition);
  text-align: center;

  h3 {
    margin: 20px 0 0;
  }

  .formPara {
    margin: 20px 0 10px;

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
`;

export const AuthBtn = styled(Link)`
  background: var(--black);
  display: block;
  margin: 10px 0;
  padding: 15px 25px;
  width: 100%;
  font-family: var(--font);
  color: var(--white);
  border-radius: 1000px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;

  &:hover {
    filter: brightness(0.85);
  }
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  padding: 15px 10px 2px;
  font-weight: 600;
  color: var(--blackTwo);
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1em;
  font-family: var(--font);
  padding: 6px 10px;
  outline: none;
  background-color: var(--whiteTransparent);
  border: 1px solid var(--blackTransparent);
  border-radius: 8px;
`;

export const Submit = styled.input`
  display: block;
  margin: 20px 0 0 0;
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
  border: none;
  outline: none;

  &:hover {
    filter: brightness(0.85);
    box-shadow: var(--shadowTwo);
    cursor: pointer;
  }
`;
