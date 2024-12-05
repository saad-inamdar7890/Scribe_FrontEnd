import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1>ABC Company</h1>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/submit-request" className="nav-link">Submit a Request</Link>
      </nav>
    </header>
  )
}

export default Header