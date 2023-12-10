import { Navigate, Outlet } from 'react-router-dom';
import { AuthType } from '../../feature/models';

interface ProtectedRouteProps {
  data: AuthType | null;
}

const ProtectedRoute = ({ data }: ProtectedRouteProps) => {
  return data && data.player ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
