import * as styled from "./Styles.Sidebar";
import { Icons } from "elements";

export const Sidebar = () => {
  const onChange = (event) => {
    const value = event.target.value;
    if (value === 'pink'){
      const root = document.querySelector(":root")
      root.style.setProperty("--themeBackgroundColor", "var(--themeBackgroundPink)")
      root.style.setProperty("--themeBorderColor", "var(--themeBorderPink)")
    }else if(value==='blue'){
      const root = document.querySelector(":root")
      root.style.setProperty("--themeBackgroundColor", "var(--themeBackgroundBlue)")
      root.style.setProperty("--themeBorderColor", "var(--themeBorderBlue)")
    }else if(value==='gray'){
      const root = document.querySelector(":root")
      root.style.setProperty("--themeBackgroundColor", "var(--themeBackgroundGray)")
      root.style.setProperty("--themeBorderColor", "var(--themeBorderGray)")
    }
  }

  return (
    <styled.Sidebar>  
      <styled.Options>
          <styled.IconsWrapper>
          <Icons.RegisterUser size="30"/>
          </styled.IconsWrapper>
          <styled.OptionsText>
            Home
          </styled.OptionsText>
        </styled.Options>
        <styled.Options>
          <styled.IconsWrapper>
          <Icons.RegisterUser size="30"/>
          </styled.IconsWrapper>
          <styled.OptionsText>
            Courses
          </styled.OptionsText>
        </styled.Options>
        <styled.Options>
          <styled.IconsWrapper>
          <Icons.RegisterUser size="30"/>
          </styled.IconsWrapper>
          <styled.OptionsText>
            My Code
          </styled.OptionsText>
        </styled.Options>
        <styled.Options>
          <styled.IconsWrapper>
          <Icons.RegisterUser size="30"/>
          </styled.IconsWrapper>
          <styled.OptionsText>
            Assignments
          </styled.OptionsText>
        </styled.Options>
        <styled.Options>
          <styled.IconsWrapper>
          <Icons.RegisterUser size="30"/>
          </styled.IconsWrapper>
          <styled.OptionsText>
            Payments
          </styled.OptionsText>
        </styled.Options>
        <styled.Options>
          <styled.IconsWrapper>
          <Icons.RegisterUser size="30"/>
          </styled.IconsWrapper>
          <styled.OptionsText>
            My Account
          </styled.OptionsText>
        </styled.Options>
        <styled.Options>
          <styled.IconsWrapper>
          <Icons.RegisterUser size="30"/>
          </styled.IconsWrapper>
          <styled.OptionsText>
            Settings
          </styled.OptionsText>
        </styled.Options>
        <styled.Themes>
        <form onChange={onChange} style={{fontSize:"10px", display:"flex"}}>
          <div className="blue" style={{background:"var(--themeBackgroundBlue)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", margin:"0 5px", borderRadius:"16.6924px", padding:"5px"}}>
            <input type="radio" name="background" id="blue" value="blue" />
            <label htmlFor="blue">Cool</label>
          </div>
          <div className="pink" style={{background:"var(--themeBackgroundPink)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", margin:"0 5px", borderRadius:"16.6924px", padding:"5px"}}>
            <input type="radio" name="background" id="pink" value="pink" />
            <label htmlFor="pink">Cherry</label>
          </div>
          <div className="gray" style={{background:"var(--themeBackgroundGray)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", margin:"0 5px", borderRadius:"16.6924px", padding:"1px"}}>
            <input type="radio" name="background" id="gray" value="gray" defaultChecked/>
            <label htmlFor="gray">Monochrome</label>
          </div>
        </form>
        </styled.Themes>
      </styled.Sidebar>
  )
}