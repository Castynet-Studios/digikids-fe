import * as styled from "./Styles.Dashboard";
import { Navbar } from "../navbar/Navbar";
import { Sidebar } from "../sidebar/Sidebar";
import { Icons } from "elements";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <styled.Top>
        <styled.Intro>
            <h1>Hi Wambui,</h1>
            <p>See what's happening in your classes</p>
        </styled.Intro>
        <styled.Search>
            <Icons.Google size="30" style={{float:"left", margin:"0 5px"}}/>
            <input className="searchBar" type="text" placeholder="Search Courses" />
        </styled.Search>
      </styled.Top>
      <styled.Middle>
        <styled.MiddleLeft>
          <styled.Title />
        </styled.MiddleLeft>
        <styled.MiddleRight>
          <styled.Title />
        </styled.MiddleRight>
      </styled.Middle>
      <styled.Bottom>
       <styled.BottomLeft>
        <styled.Title />
       </styled.BottomLeft>
       <styled.BottomRight>
         <styled.Title>
           Courses
         </styled.Title>
         <styled.Courses>
          <styled.Course />
          <styled.Course />
          <styled.Course />
          <styled.Course />
          <styled.Course>
              <Icons.RegisterUser size="20"/>
              Add course
          </styled.Course>
         </styled.Courses>
       </styled.BottomRight>
      </styled.Bottom>
    </>
  )
}

export default Dashboard