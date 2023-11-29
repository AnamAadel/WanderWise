import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function PublicRoute({ children }) {
  const { user } = useAuth();

  return (
    <div>
      {!user && children}
      {user && <Navigate to="/" />}
    </div>
  );
}

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    
  ]).isRequired,
};

export default PublicRoute;
