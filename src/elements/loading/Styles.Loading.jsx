import styled, { keyframes } from "styled-components";
import { Icons } from "../icons/icons";

export const Wrapper = styled.div`
  width: fit-content;
  height: 40vh;
  margin: 0 auto;
`;

const Rotate = keyframes`
  from {
	transform: rotate(0deg);
  } 
  to {
	transform: rotate(359deg);
  }
`;

export const Loader = styled(Icons.Loader)`
  width: 80px;
  vertical-align: middle;
  height: 100%;
  animation: ${Rotate} 1.3s infinite linear;
  color: var(--accentTwo);
`;
