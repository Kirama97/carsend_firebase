import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedRoute = ({ allowedRoles ,children }) => {
  const { user, loading } = useAuth();

  if (loading) return    <div className="flex flex-col justify-center items-center h-screen bg-slate-200 gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <p className="text-gray-700 text-lg font-medium mt-4 animate-pulse">Chargement des données...</p>
      </div>


  if (!user) return <Navigate to="/connexion" replace />;

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
