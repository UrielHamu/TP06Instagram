import { useEffect, useState } from "react";

import "./App.css";
import "./index.css";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Stories from "./Components/Stories/Stories";
import Feed from "./Components/Feed/Feed";
import Modal from "./Components/Modal/Modal";
import Profile from "./Components/Profile/Profile";

import { getCats } from "./services/catApi";
import user from "./data/user";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [view, setView] = useState("feed");

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const data = await getCats();

        const formattedPosts = data.map((cat, index) => ({
          id: index,
          image: cat.url,
          username: `cat_user_${index + 1}`,
          likes: Math.floor(Math.random() * 1000),
          caption: "Beautiful cat 😺",
          comments: [
            "So cute!",
            "Amazing cat!",
            "I love this photo!",
          ],
          date: "2 hours ago",
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="app">
      <Sidebar setView={setView} />

      <div className="main-content">
        <Header />

        {view === "feed" ? (
          <>
            <Stories />

            <Feed
              posts={posts}
              setSelectedPost={setSelectedPost}
            />
          </>
        ) : (
          <Profile user={user} posts={posts} />
        )}
      </div>

      {selectedPost && (
        <Modal
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
        />
      )}
    </div>
  );
}

export default App;