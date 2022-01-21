import * as styled from "./Styles.Auth";

import { Media } from "assets";
import { Icons } from "elements";
import { useApp } from "Context";

import Login from "./login/Login";
import Register from "./register/Register";

export default function Auth(params) {
  const { signInGoogle } = useApp();
  const { location } = params;

  return (
    <styled.Wrapper data-testid="wrapper">
      <styled.Image>
        {/* the image is attached as a background image */}
      </styled.Image>
      <styled.Content>
        {location && location === "register" ? (
          <Register />
        ) : location && location === "login" ? (
          <Login />
        ) : (
          <>
            <styled.Form>
              <h3>Welcome back</h3>
              <p className="formPara">Login with</p>
              <styled.LoginBtn to="" onClick={() => signInGoogle()}>
                <styled.IconWrapper>
                  <Icons.Google size="20" />
                </styled.IconWrapper>
                Google
              </styled.LoginBtn>
              <styled.LoginBtn to="login">
                <styled.IconWrapper>
                  <Icons.Account size="20" />
                </styled.IconWrapper>
                Email &amp; Password
              </styled.LoginBtn>
              <p className="formPara">New to the site?</p>
              <styled.LoginBtn to="register">
                <styled.IconWrapper>
                  <Icons.RegisterUser size="20" />
                </styled.IconWrapper>
                Register
              </styled.LoginBtn>
            </styled.Form>
          </>
        )}
        <styled.Info>
          <styled.Intellect src={Media.intellect} alt="the intellect" />
        </styled.Info>
      </styled.Content>
    </styled.Wrapper>
  );
}
