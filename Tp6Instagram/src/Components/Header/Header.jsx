import "./Header.css";

import {
  FaCog,
  FaCamera,
  FaPaperPlane,
  FaSearch
} from "react-icons/fa";

function Header() {

  return (
    <header className="header">

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search"
        />

      </div>

      <div className="header-icons">

        <FaCog />
        <FaCamera />
        <FaPaperPlane />

        <button>
          + New Post
        </button>

      </div>

    </header>
  );
}

export default Header;