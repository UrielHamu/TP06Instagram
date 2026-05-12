import './Stories.css'

function Stories() {
  const stories = [1,2,3,4,5,6]

  return (
    <div className='stories'>
      {
        stories.map((story) => (
          <div key={story} className='story'>
            <img
              src={`https://cdn2.thecatapi.com/images/${story}.jpg`}
              alt='story'
            />

            <p>cat_{story}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Stories