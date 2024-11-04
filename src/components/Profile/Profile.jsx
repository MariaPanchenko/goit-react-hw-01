import s from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={s.wrapper}>
      <div className={s.userInfo}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.profileInfo}>
        <li className={s.profileInfoLists}>
          <span className={s.profileFollowers}>Followers</span>
          <span className={s.profileNumber}>{stats.followers}</span>
        </li>
        <li className={s.profileInfoLists}>
          <span className={s.profileViews}>Views</span>
          <span>{stats.wiews}</span>
        </li>
        <li className={s.profileInfoLists}>
          <span>Likes</span>
          <span>{stats.lakes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
