import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../provider/authProvider';
import logoutUsers from '../redux/users/actions/logoutUsers';

export default function Logout() {
  const { setToken } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutUsers());
    setToken();
    navigate('/', { replace: true });
  };

  return (
    <>
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  );
}
