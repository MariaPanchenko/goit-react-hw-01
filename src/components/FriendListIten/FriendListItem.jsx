import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={s.FriendListItem}>
      <img className={s.image} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'isOnline' : 'Offline'}
      </p>
    </div>
  );
}
export default FriendListItem;
