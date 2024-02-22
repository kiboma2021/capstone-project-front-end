import { useDispatch, useSelector } from 'react-redux';
import {
  useState, createContext, useMemo, useEffect,
} from 'react';
import './App.css';
import AuthProvider from './provider/authProvider';
import Routes from './routes';
import currentUserAPI from './redux/users/actions/currentUserAPI';

export const User = createContext({
  myState: '',
  setMyState: () => {},
});

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.currentUser);
  const [currentUser, setCurrentUser] = useState(user);
  const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  useEffect(() => {
    dispatch(currentUserAPI());
  }, [dispatch]);

  return (
    <User.Provider value={value}>
      {useMemo(() => (
        <>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </>
      ), [])}
    </User.Provider>
  );
}
