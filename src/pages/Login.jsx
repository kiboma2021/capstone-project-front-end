import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { useAuth } from '../provider/authProvider';
import loginUsers from '../redux/users/actions/loginUsers';
import { User } from '../App';
import currentUserAPI from '../redux/users/actions/currentUserAPI';

const Login = () => {
  const { setToken } = useAuth();
  const { setCurrentUser } = useContext(User);
  const navigate = useNavigate();
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.currentUser);

  const handleLogin = async (data) => {
    await dispatch(loginUsers(data));
    await dispatch(currentUserAPI());
    setToken(localStorage.getItem('token'));
    setCurrentUser(user);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div>
        <input
          placeholder="Name"
          type="text"
          name="name"
          {...register('name', {
            required: 'Name is required',
            maxLength: { value: 80, message: 'Name must be 80 or less characters long' },
          })}
        />
        {errors.name && (<p>{errors.name.message}</p>)}
      </div>
      <div>
        <input
          placeholder="Email"
          type="text"
          name="email"
          {...register('email', {
            required: 'Email is required',
            maxLength: { value: 80, message: 'Email must be 80 or less characters long' },
          })}
        />
        {errors.email && (<p>{errors.email.message}</p>)}
      </div>
      <div>
        <input
          placeholder="Password"
          type="password"
          name="password"
          {...register('password', {
            required: 'password is required',
            maxLength: { value: 80, message: 'Password must be 80 or less characters long' },
          })}
        />
        {errors.password && (<p>{errors.password.message}</p>)}
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div>
        <button onClick={() => navigate('/')} type="button">Sign up here</button>
      </div>
    </form>
  );
};

export default Login;
