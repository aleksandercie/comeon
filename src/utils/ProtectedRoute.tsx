import { Navigate, Outlet } from 'react-router-dom';
import { AuthType } from '../feature/models';
import { links } from '../shared/links';

interface ProtectedRouteProps {
  data: AuthType | null;
}
const { homepage } = links;

const ProtectedRoute = ({ data }: ProtectedRouteProps) => {
  return data && data.player ? <Outlet /> : <Navigate to={homepage} />;
};

export default ProtectedRoute;
