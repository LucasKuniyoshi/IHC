import './header.css';
import { Link } from 'react-router-dom'

function Header(){
  return(
    <header>
      <Link className="logo" to="/">Hora Da Larica</Link>
      <Link className="favoritos" to="/favoritos">Adiconar Receita</Link>
    </header>
  )
}

export default Header;