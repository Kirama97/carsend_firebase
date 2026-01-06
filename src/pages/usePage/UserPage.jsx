import { Outlet } from "react-router-dom";
import Navbar from "../../composants/User/navbar/Navbar";



const UserPage = () => {
  return (
    <>
        <Navbar />
        <Outlet />
      
    </>
  );
};

export default UserPage;
