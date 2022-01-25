import { useState } from "react";
import * as styled from "./Styles.Login";

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <styled.Wrapper>
      <h3>Login</h3>
      <form>
        <styled.Label htmlFor="email">Email</styled.Label>
        <styled.Input
          placeholder="omondi@gmail.com"
          type="email"
          name="Email"
          id="email"
        />
        <styled.CheckBoxWrap>
          <input
            type="checkbox"
            onClick={() => setShowPass(!showPass)}
            id="checkPass"
          />
          <label htmlFor="checkPass">Remember me</label>
        </styled.CheckBoxWrap>
        <styled.Submit type="submit" value="Login" />
      </form>
      <p className="formPara">Don't have an Account yet?</p>
      <styled.AuthBtn to="/auth">Register</styled.AuthBtn>
    </styled.Wrapper>
  );
}
