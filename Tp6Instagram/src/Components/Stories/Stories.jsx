import './Stories.css'

function Stories() {
  const stories = [1,2,3,5,7,8]//uso estos numeros porque 4 y 6 no tienen fotos

  return (
    <div className='stories'>
      {
        stories.map((story) => (
          <div key={story} className='story'>
            <img
              src={`https://cdn2.thecatapi.com/images/${story}.jpg`}
              alt='story'
            />

            <p>gato_{story}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Stories