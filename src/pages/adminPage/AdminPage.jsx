import { Outlet } from "react-router-dom";
import NavbarAdmin from "../../composants/Admin/adminNavbar/NavAdmin";

const AdminPage = () => {
  return (
    <>
      <NavbarAdmin />
      <Outlet />
    </>
  );
};

export default AdminPage;
