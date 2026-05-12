import './Modal.css'

function Modal({ selectedPost, setSelectedPost }) {
  return (
    <div
      className='modal-overlay'
      onClick={() => setSelectedPost(null)}
    >
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()}
      >
        <img src={selectedPost.image} alt='cat' />

        <div className='modal-info'>
          <h2>{selectedPost.username}</h2>

          <p>{selectedPost.caption}</p>

          <h3>{selectedPost.likes} likes</h3>

          <div className='comments'>
            {
              selectedPost.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))
            }
          </div>

          <small>{selectedPost.date}</small>

          <button onClick={() => setSelectedPost(null)}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal