import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { User } from '../App';
import createBooks from '../redux/books/actions/createBooks';

export default function CreateBooks() {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm();
  const dispatch = useDispatch();
  const { currentUser } = useContext(User);

  const onSubmit = (data) => {
    try {
      const { id } = currentUser;
      dispatch(createBooks({ data, id }));
      reset();
      return null;
    } catch (error) {
      return new Error(error);
    }
  };

  return (
    <div className="content private">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ADD A NEW BOOK</h1>
        <div>
          <input
            placeholder="Title"
            type="text"
            name="title"
            {...register('title', {
              required: 'Title is required',
            })}
          />
          {errors.title && (<p>{errors.title.message}</p>)}
        </div>
        <div>
          <input
            placeholder='Price'
            type='number'
            name='price'
            {...register('price', {
              required: 'Price is required',
              min: { value: 0, message: 'Price must be greater than or equal 0.' },
            })}
          />
          {errors.price && (<p>{errors.price.message}</p>)}
        </div>
        <div>
          <input
            placeholder="Image"
            type="file"
            name="image"
            {...register('image', {
              required: 'The book image is required',
            })}
          />
          {errors.image && (<p>{errors.image.message}</p>)}
        </div>
        <div>
          <input
            placeholder="Author"
            type="text"
            name="author"
            {...register('author', {
              required: 'Author is required',
            })}
          />
          {errors.author && (<p>{errors.author.message}</p>)}
        </div>
        <div>
          <textarea
            placeholder="Description"
            type="text"
            name="description"
            {...register('description', {
              required: 'Description is required',
              maxLength: { value: 70, message: 'Description must be no more than 70 characters long.' },
            })}
          />
          {errors.description && (<p>{errors.description.message}</p>)}
        </div>
        <div>
          <input
            placeholder="Year"
            type="number"
            name="year"
            {...register('year', {
              required: 'Year is required',
              min: { value: 1000, message: 'Year must be no less than 1000.' },
            })}
          />
          {errors.year && (<p>{errors.year.message}</p>)}
        </div>
        <div>
          <input
            placeholder="Rating"
            type="number"
            name="rating"
            {...register('rating', {
              required: 'Rating is required',
              min: { value: 0, message: 'Rating must be no less than 0' },
              max: { value: 5, message: 'Rating must be no more than 5' },
            })}
          />
          {errors.rating && (<p>{errors.rating.message}</p>)}
        </div>
        <div>
          <button className="btn" type="submit">Create book</button>
        </div>
      </form>
    </div>
  );
}
