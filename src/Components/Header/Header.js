import "./Header.css";
import logo from "./logo.png"
import player from "./player.png"
import search from './search.png'

function Header() {
  return (
    <div className="header">
      <div className="header-player">
        <img className="header-player__img" src={player} alt="" />
      </div>
      <div className="header-logo">
        <a className="header-logo__item" href="./index.html">
          <img src={logo} alt="" />
        </a>
      </div>
      <nav className="header-nav">
        <div className="header-nav-container">
          <ul className="nav-list">
            <li className="nav-list__item">
              <a href="./search.html" className="href">
                <img src={search} className="href__img" alt="" />
              </a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="href">Live</a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="href">Music</a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="href">Charts</a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="href">Events</a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="href">Features</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
