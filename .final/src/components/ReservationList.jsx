import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/actions/reservationActions';

export default function ReservationList() {
  const dispatch = useDispatch();
  const { reservations } = useSelector(state => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Reservations</h2>
      <ul>
        {reservations.map(r => (
          <li key={r.id}>Room: {r.roomId} | Check-In: {r.checkIn} | Check-Out: {r.checkOut}</li>
        ))}
      </ul>
    </div>
  );
}
