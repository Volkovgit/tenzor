import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";
import player from "./player.png";
import search from "./search.png";

function Header() {
  return (
    <div className="header">
      <div className="header-player">
        <img className="header-player__img" src={player} alt="" />
      </div>
      <div className="header-logo">
        <Link to="" className="header-logo__item">
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav className="header-nav">
        <div className="header-nav-container">
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to="/search">
                <img src={search} className="href__img" alt="" />
              </Link>
            </li>
            <li className="nav-list__item">
              <Link href="#" className="href">
                Live
              </Link>
            </li>
            <li className="nav-list__item">
              <Link href="#" className="href">
                Music
              </Link>
            </li>
            <li className="nav-list__item">
              <Link href="#" className="href">
                Charts
              </Link>
            </li>
            <li className="nav-list__item">
              <Link href="#" className="href">
                Events
              </Link>
            </li>
            <li className="nav-list__item">
              <Link href="#" className="href">
                Features
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
