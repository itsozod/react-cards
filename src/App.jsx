import "./App.css";
import Button from "./userProfile/Button";
import UserProfile from "./userProfile/UserProfile";
import { profiles } from "./userProfile/Profiles";

const clickMe = (id) => {
  profiles.map((profile) => {
    if (profile.id === id) {
      alert(`You clicked ${profile.name}`);
    }
  });
};

function App() {
  return (
    <div className="card-container">
      {profiles.map((profile) => (
        <UserProfile
          key={profile.id}
          img={profile.img}
          name={profile.name}
          age={profile.age}
          email={profile.email}
        >
          <Button text={profile.btnText} onClick={() => clickMe(profile.id)} />
        </UserProfile>
      ))}
    </div>
  );
}

export default App;
