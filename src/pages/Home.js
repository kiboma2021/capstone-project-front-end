/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import useFetch from '../hooks/useFetch';
import { FeaturedBooks } from '../components';

export const Home = () => {
  const url = 'http://localhost:8000/books';
  const { data } = useFetch(url);

  return (
    <div>
      <div>
        <div>
          <FeaturedBooks data={data} />
        </div>
      </div>

    </div>
  );
};
