import "./Footer.css";
import logo from './footer_logo.png'

function Footer() {
  return (
    <footer>
        <div className="topContainer">
            <div className="about">
            <div className="about-block">
            <p className="about-block__header">Company</p>
            <p className="about-block-link"><a className="about-block-link__item" href="#">About Last.fm</a></p>
            <p className="about-block-link"><a className="about-block-link__item"   href="#">Contact Us</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Jobs</a></p>
            </div>
            <div className="about-block">
            <p className="about-block__header">HELP</p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Track My Music</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Community Support</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Community Guidelines</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Help</a></p>
            </div>
            <div className="about-block">
            <p className="about-block__header">GOODIES</p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Download Scrobbler</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Developer API</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Free Music Downloads</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Merchandise</a></p>
            </div>
            <div className="about-block">
            <p className="about-block__header">ACCOUNT</p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">About Last.fm</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Contact Us</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Jobs</a></p>
            </div>
            <div className="about-block">
            <p className="about-block__header">FOLLOW US</p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Sign Up</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Log In</a></p>
            <p className="about-block-link"><a className="about-block-link__item"  href="#">Subscribe</a></p>
            </div>
        </div>
        </div>
      <div className="underline_long mr-20"></div>
      <div className="bottomContainer">
        <div className="language">
            <ul className="language-list">
                <li className="language-list__item"><a className="lang-item-href" href="">English</a></li>
                <li className="language-list__item"><a className="lang-item-href" href="">Deutsch</a></li>
                <li className="language-list__item"><a className="lang-item-href" href="">Español</a></li>
                <li className="language-list__item"><a className="lang-item-href" href="">Français</a></li>
                <li className="language-list__item"><a className="lang-item-href" href="">Italiano</a></li>
                <li className="language-list__item"><a className="lang-item-href" href="">日本語</a></li>
                <li className="language-list__item"><a className="lang-item-href" href="">Polski</a></li>
                <li className="language-list__item"><a className="lang-item-href" href="">Português</a></li>
                <li className="language-list__item"><a className="lang-item-href" href="">Русский</a></li>
                <li className="language-list__item"><a className="lang-item-href" href="">Svenska</a></li>
                <li className="language-list__item"><a className="lang-item-href" href="">Türkçe</a></li>
            </ul>
            <div className="language-timezone">
                <p className="time_zone">
                    Time zone: <span className="white_text">Europe/Moscow</span>
                </p>
            </div>
        </div>
        <div class="footer-logo">
          <p class="footer_logo_text white_text">Audioscrobbler</p>
          <img src={logo} alt="" />
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
