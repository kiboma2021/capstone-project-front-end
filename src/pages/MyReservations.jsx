import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../App';
import listOfReservations from '../redux/reservations/actions/indexReservations';
import deleteReservations from '../redux/reservations/actions/deleteReservations';
import trash from '../assets/trash-can.png';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.list);
  const { currentUser } = useContext(User);
  const [success, setSuccess] = useState(false);

  const handleDelete = async (reserveId) => {
    await dispatch(deleteReservations(reserveId));
    await setSuccess(!success);
  };

  useEffect(() => {
    if (currentUser && currentUser.id) {
      dispatch(listOfReservations(currentUser.id));
    }
  }, [dispatch, currentUser, success]);

  return (
    <div className="content">
      <ul className="reservations">
        {reservations.length > 0
          ? reservations.map((reservation) => (
            <li className="container-reservation" key={reservation.key}>
              <img className="reservation-img" alt="Book profile" src={reservation.image} />
              <div className="arrow" />
              <div className="reservation-info">
                <p>
                  Book id:
                  {' '}
                  {reservation.id}
                </p>
                <p>
                  Reservation id:
                  {' '}
                  {reservation.key}
                </p>
                <p>
                  Year:
                  {' '}
                  {reservation.year}
                </p>
                <div
                  onClick={() => handleDelete(reservation.key)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleDelete(reservation.key);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img alt="trash icon" src={trash} className="trash" />
                </div>
              </div>
            </li>
          ))
          : <div className="no-books">There are not reservations yet</div>}
      </ul>
    </div>
  );
};

export default MyReservations;
