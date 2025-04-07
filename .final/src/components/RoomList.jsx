import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/actions/roomActions';
import RoomDetails from './RoomDetails';

export default function RoomList() {
  const dispatch = useDispatch();
  const { rooms, loading } = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Room List</h2>
      {loading ? <p>Loading...</p> : (
        rooms.map(room => <RoomDetails key={room.id} room={room} />)
      )}
    </div>
  );
}
