import PropTypes from "prop-types";
import s from "./Statistics.module.css";
function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul class={s.list}>
        {stats.map((stat) => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: get_rand_color() }}
          >
            <span className={s.value}>{stat.label}</span>
            <span className={s.value}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

function get_rand_color() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}

export default Statistics;
