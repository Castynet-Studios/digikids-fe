import * as styled from "./Styles.Register";

export default function Register() {
  return (
    <styled.Wrapper>
      <h3>Register</h3>
      <form>
        <styled.Label htmlFor="firstName">First Name</styled.Label>
        <styled.Input
          placeholder="John"
          type="text"
          name="First Name"
          id="firstName"
        />
        <styled.Label htmlFor="lastName">Last Name</styled.Label>
        <styled.Input
          placeholder="Omondi"
          type="text"
          name="Last Name"
          id="lastName"
        />
        <styled.Label htmlFor="email">Email</styled.Label>
        <styled.Input
          placeholder="omondi@gmail.com"
          type="email"
          name="Email"
          id="email"
        />
        <styled.Submit type="submit" value="Register" />
      </form>
      <p className="formPara">Already have an Account?</p>
      <styled.AuthBtn to="/auth">Login</styled.AuthBtn>
    </styled.Wrapper>
  );
}
