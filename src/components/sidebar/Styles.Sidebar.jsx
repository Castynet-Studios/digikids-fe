import styled from "styled-components";

export const Sidebar = styled.div`
  position: absolute;
  height: 100vh;
  width: 15%;
  left: 0;
  top: 52px;
  background: var(--white);
  box-shadow: 8.34618px 0px 45.904px -36.8623px rgba(124, 124, 124, 0.25);

  @media (max-width: 1080px) {
    display: none;
  }
`;
export const Options = styled.div`
  position: relative;
  left: 0;
  top: 33.46px;
  height: 54.25px;
  width: 100%;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 13px solid var(--white);

  &:hover, :focus, :active {
    background: var(--themeBackgroundColor);
    border-left: 13px solid var(--themeBorderColor);
    border-top: 1px solid var(--themeBorderColor);
    border-bottom: 1px solid var(--themeBorderColor);
    font-weight: 900;
    cursor: pointer;
  }
`;
export const IconsWrapper = styled.div`
  position: absolute;
  left: 9.72%;
  right: 93.64%
  top: 14.9px;
`;
export const OptionsText = styled.div`
  position: absolute;
  left: 60px;
  top: 19px;
`;
export const Themes = styled.div`
  position: relative;
  left: 0;
  top: 33.46px;
  height: 54.25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  `
