import "./App.css";
import Profile from "./Components/Profile/Profile";
import user from "./user.json";
import Statistics from "./Components/Statistics/Statistics";
import statData from "./statistical-data.json";
function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />
    </div>
  );
}

export default App;
