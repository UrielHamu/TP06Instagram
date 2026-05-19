import "./Sidebar.css";
import user from "../../data/user";

import {
  FaHome,
  FaCompass,
  FaFilm,
  FaTv,
  FaBell,
  FaUser
} from "react-icons/fa";

function Sidebar({ setView }) {

  return (
    <aside className="sidebar">

      <div className="profile-section">

        <img
          src={user.profilePic}
          alt="profile"
        />

        <h2>{user.username}</h2>

        <p>@cat_user</p>

        <div className="stats-box">

          <div>
            <h3>121K</h3>
          </div>

          <div>
            <h3>900K</h3>
          </div>

        </div>
      </div>

      <div className="menu">

        <button onClick={() => setView("feed")}>
          <FaHome />
          Home
        </button>

        <button onClick={() => setView("profile")}>
          <FaUser />
          Profile
        </button>

        <button>
          <FaCompass />
          Explore
        </button>

        <button>
          <FaFilm />
          Reels
        </button>

        <button>
          <FaTv />
          IGTV
        </button>

        <button>
          <FaBell />
          Notification
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;