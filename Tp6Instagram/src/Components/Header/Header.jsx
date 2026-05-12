import './Header.css'
import { FaSearch, FaHeart, FaPlus } from 'react-icons/fa'

function Header() {
  return (
    <header className='header'>
      <h1>Instagram</h1>

      <div className='search-box'>
        <FaSearch />
        <input type='text' placeholder='Search...' />
      </div>

      <div className='header-icons'>
        <FaHeart />
        <FaPlus />
      </div>
    </header>
  )
}

export default Header