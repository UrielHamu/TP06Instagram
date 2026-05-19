import "./Profile.css";
import Post from "../Post/Post";

function Profile({
  user,
  posts,
  setSelectedPost
}) {

  return (
    <div className="profile">

      <div className="profile-header">

        <img
          src={user.profilePic}
          alt="profile"
          className="profile-avatar"
        />

        <div className="profile-info">

          <h1>{user.username}</h1>

          <p>{user.bio}</p>

          <div className="stats">
            <span>{user.posts} posts</span>
            <span>{user.followers} followers</span>
            <span>{user.following} following</span>
          </div>

          <button className="edit-profile-btn">
            Edit Profile
          </button>

        </div>
      </div>

      <div className="profile-posts">

        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            setSelectedPost={setSelectedPost}
          />
        ))}

      </div>

    </div>
  );
}

export default Profile;