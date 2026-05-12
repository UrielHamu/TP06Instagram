import './Post.css'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

function Post({ post, setSelectedPost }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className='post'>
      <img
        src={post.image}
        alt='cat'
        onClick={() => setSelectedPost(post)}
      />

      <div className='post-info'>
        <h3>{post.username}</h3>

        <p>{post.caption}</p>

        <div className='post-actions'>
          <button onClick={() => setLiked(!liked)}>
            <FaHeart />
          </button>

          <span>
            {liked ? post.likes + 1 : post.likes} likes
          </span>
        </div>
      </div>
    </div>
  )
}

export default Post