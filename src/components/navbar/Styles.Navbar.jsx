import styled from "styled-components";

export const Wrapper = styled.div`
  height: 52px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--white);
  padding: 0 30px
`;
export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 15px;
  text-align: right;
`;
export const Link = styled.p`
  margin: 10px;
  display: flex;
`;
export const IconWrapper = styled.span`
  float: right;
  margin-left: 5px;
`;
export const Logo = styled.img`
  width: 33px;
  margin: 0 10px;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`