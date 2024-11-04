import s from './FriendList.module.css';
import FriendListItem from '../FriendListIten/FriendListItem';
function FriendList({ friends }) {
  return (
    <ul className={s.FriendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
