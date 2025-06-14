import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';
import { UserRoutes } from './user.routes';
import { AdminRoutes } from './admin.routes';

export function Routes() {
  const { user } = useAuth();

  function AcessRoute() {
    switch (user.role) {
      case 'admin':
        return <AdminRoutes />;
      case 'user':
        return <UserRoutes />;
      default:
        return <UserRoutes />
    }
  }

  return (
    <BrowserRouter>
      { user ? <AcessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  )
};