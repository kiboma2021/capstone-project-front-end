import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../provider/authProvider';
import createUsers from '../redux/users/actions/createUsers';

export default function SignupForm() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(createUsers(data));
    setToken(localStorage.getItem('token'));
    navigate('/', { replace: true });
  };

  const password = watch('password');

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              required: 'Password is required',
              maxLength: { value: 80, message: 'Password must be 80 or less characters long' },
            })}
          />
          {errors.password && (<p>{errors.password.message}</p>)}
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            name="passwordConfirmation"
            {...register('passwordConfirmation', {
              required: 'Password confirmation is required',
              validate: (value) => value === password || 'Password confirmation and password do not match',
            })}
          />
          {errors.passwordConfirmation && (<p>{errors.passwordConfirmation.message}</p>)}
        </div>
        <div>
          <button type="submit">Signup</button>
        </div>
        <div>
          <button onClick={() => navigate('/login')} type="button">Login here</button>
        </div>
      </form>
    </div>
  );
}
