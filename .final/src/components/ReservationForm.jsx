import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeReservation } from '../redux/actions/reservationActions';

export default function ReservationForm() {
  const [form, setForm] = useState({ roomId: "", checkIn: "", checkOut: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeReservation(form));
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Make Reservation</h2>
      <input type="number" placeholder="Room ID" onChange={e => setForm({ ...form, roomId: e.target.value })} />
      <input type="date" onChange={e => setForm({ ...form, checkIn: e.target.value })} />
      <input type="date" onChange={e => setForm({ ...form, checkOut: e.target.value })} />
      <button className="btn btn-primary">Reserve</button>
    </form>
  );
}
