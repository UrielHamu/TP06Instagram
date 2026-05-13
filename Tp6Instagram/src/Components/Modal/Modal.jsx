import "./Modal.css";

function Modal({ selectedPost, setSelectedPost }) {
  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          src={selectedPost.image}
          alt="cat"
        />

        <div className="modal-info">
          <h2>{selectedPost.username}</h2>

          <p>{selectedPost.caption}</p>

          <h3>{selectedPost.likes} likes</h3>

          <div className="comments">
            {selectedPost.comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>

          <small>{selectedPost.date}</small>

          <button onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;