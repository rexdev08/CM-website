import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <div className="flexboxContainer">
        <Navbar />
        <Outlet />
      </div>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow:row;


  /* background-color: cyan; */

  .flexboxContainer {
    width:100%;
    display: flex;
    flex-flow: column;
    /* gap:1rem; */
  }
`;

export default Dashboard;
