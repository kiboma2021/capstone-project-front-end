import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { useAuth } from '../provider/authProvider';
import logoutUsers from '../redux/users/actions/logoutUsers';
import { User } from '../App';

export default function Logout() {
  const { setToken } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(User);

  const handleLogout = async () => {
    await dispatch(logoutUsers());
    setToken();
    setCurrentUser(null);
    navigate('/', { replace: true });
  };

  return (
    <>
      <button data-testid="Logout" className="link-nav" type="button" onClick={handleLogout}>LOGOUT</button>
    </>
  );
}
