import s from "./Profile.module.css";
import PropTypes from "prop-types";
function Profile({ name, tag, location, avatar, followers, views, likes }) {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img className={s.image} src={avatar} alt="Аватар пользователя" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.listItem}>
          <span className={s.stats}>Followers</span>
          <span className={s.stats}>{followers}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.stats}>Views</span>
          <span className={s.stats}>{views}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.stats}>Likes</span>
          <span className={s.stats}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  stats: PropTypes.array,
};

export default Profile;
