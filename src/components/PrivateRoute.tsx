import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

interface PrivateRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'customer';
}

const PrivateRoute = ({ children, requiredRole }: PrivateRouteProps) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  
  console.log('PrivateRoute check:', { isAuthenticated, user, requiredRole });

  if (!isAuthenticated) {
    // Redirect to appropriate login page based on required role
    const loginPath = requiredRole === 'customer' ? '/customer/login' : '/admin/login';
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // Redirect to appropriate dashboard based on user role
    const dashboardPath = user?.role === 'customer' ? '/customer' : '/admin';
    return <Navigate to={dashboardPath} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;