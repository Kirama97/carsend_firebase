import { Outlet } from "react-router-dom";
import NavbarSuper from "../../composants/SuperAdmin/superNav/NavSuper";

const SuperAdminPage = () => {
  return (
    <>
      <NavbarSuper />
      <Outlet />
    </>
  );
};

export default SuperAdminPage;
