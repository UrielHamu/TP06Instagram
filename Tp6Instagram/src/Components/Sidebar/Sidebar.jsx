import "./Sidebar.css";
import user from "../../data/user";

function Sidebar({ setView }) {
  return (
    <aside className="sidebar">
      <img src={user.profilePic} alt="profile" />

      <h2>{user.username}</h2>

      <p>{user.followers} followers</p>

      <button onClick={() => setView("feed")}>
        Home
      </button>

      <button onClick={() => setView("profile")}>
        Profile
      </button>
    </aside>
  );
}

export default Sidebar;