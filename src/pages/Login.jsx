import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAuth } from '../provider/authProvider';
import loginUsers from '../redux/users/actions/loginUsers';

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    await dispatch(loginUsers(data));
    setToken(localStorage.getItem('token'));
    navigate('/', { replace: true });
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
