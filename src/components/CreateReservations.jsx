import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { User } from '../App';
import createReservations from '../redux/reservations/actions/createReservations';

export default function CreateReservations() {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm();
  const dispatch = useDispatch();
  const { currentUser } = useContext(User);

  const onSubmit = (data) => {
    const { id } = currentUser;
    dispatch(createReservations({ data, id }));
    reset();
  };

  return (
    <div className="content">
      <img alt="Background" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>RESERVE A BOOK</h1>
        <div>
          <label htmlFor="doctorId">
            Book id
            {' '}
            <br />
            <input
              type="number"
              name="bookId"
              {...register('bookId', {
                required: 'Book id is required',
                min: { value: 1, message: 'Book id must be greater than 0' },
              })}
            />
          </label>

          {errors.bookId && (<p>{errors.bookId.message}</p>)}
        </div>

        <button className="btn" type="submit">Reserve book</button>
      </form>
    </div>
  );
}
