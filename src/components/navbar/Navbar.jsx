import * as styled from "./Styles.Navbar"
import { Icons } from "elements";
import { Media } from "assets";

export const Navbar = () => {
  return (
    <styled.Wrapper>
      <styled.LogoWrapper>
        <styled.Logo src={Media.logo} alt="logo" />
        <h2 style={{color:"#0A033C", lineheight:"36px"}}>
            Digikids
        </h2>
      </styled.LogoWrapper>
        <styled.Links>
          <styled.Link>
            Courses
            <styled.IconWrapper>
              <Icons.Down size="10"/>
            </styled.IconWrapper>
          </styled.Link>
          <styled.Link>
            Cart(0)
            <styled.IconWrapper>
              <Icons.Cart size="20" color="#FF6652" />
            </styled.IconWrapper>
          </styled.Link>
          <styled.Link>
            My Account
            <styled.IconWrapper>
              <Icons.Profile size="20" color="#9C4DF4"/>
            </styled.IconWrapper>
          </styled.Link>        
        </styled.Links>
      </styled.Wrapper>
  )
}
