import * as styled from "./Styles.Dashboard";
import { Navbar } from "../navbar/Navbar";
import { Sidebar } from "../sidebar/Sidebar";
import { Icons } from "elements";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <styled.Dash>
        <styled.Top>
          <styled.Intro>
              <h1>Hi Wambui,</h1>
              <p>See what's happening in your classes</p>
          </styled.Intro>
          <styled.Search>
              <Icons.Search size="30" style={{float:"left", margin:"0 5px"}}/>
              <input className="searchBar" type="text" placeholder="Search Courses" />
          </styled.Search>
        </styled.Top>
        <styled.Middle>
          <styled.MiddleLeft>
          </styled.MiddleLeft>
          <styled.MiddleRight>
          </styled.MiddleRight>
        </styled.Middle>
        <styled.Bottom>
        <styled.BottomLeft>
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
                <Icons.Add size="20" color="rgb(117,121,231, .5)"/>
                Add course
            </styled.Course>
          </styled.Courses>
        </styled.BottomRight>
        </styled.Bottom>
      </styled.Dash>
    </>
  )
}

export default Dashboard