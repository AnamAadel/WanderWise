import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function PrivateRoute({children}) {
    const {user} = useAuth();
  return (
    <>
        {user && <div>{children}</div> }
        {!user && <Navigate to="/login"></Navigate>}
        
    </>
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute