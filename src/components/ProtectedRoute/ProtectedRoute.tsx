import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  user: boolean;
};

const ProtectedRoute = ({ user }: ProtectedRouteProps) => {
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
