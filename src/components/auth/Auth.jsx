import * as styled from "./Styles.Auth";
import { Media } from "assets";
import { Icons } from "elements";
import { useApp } from "Context";

export default function Auth() {
  const { signInGoogle } = useApp();

  return (
    <>
      <styled.Wrapper data-testid="wrapper">
        <styled.Image>
          {/* the image is attached as a background image */}
        </styled.Image>
        <styled.Content>
          <styled.Form>
            <h3>Welcome back</h3>
            <p className="formPara">Login with</p>
            <styled.LoginBtn onClick={() => signInGoogle()}>
              <styled.IconWrapper>
                <Icons.Google size="20" />
              </styled.IconWrapper>
              Google
            </styled.LoginBtn>
            <styled.LoginBtn>
              <styled.IconWrapper>
                <Icons.Account size="20" />
              </styled.IconWrapper>
              Email &amp; Password
            </styled.LoginBtn>
            <p className="formPara">New to the site?</p>
            <styled.LoginBtn>
              <styled.IconWrapper>
                <Icons.RegisterUser size="20" />
              </styled.IconWrapper>
              Register
            </styled.LoginBtn>
          </styled.Form>
          <styled.Info>
            <styled.Intellect src={Media.intellect} alt="the intellect" />
          </styled.Info>
        </styled.Content>
      </styled.Wrapper>
    </>
  );
}
