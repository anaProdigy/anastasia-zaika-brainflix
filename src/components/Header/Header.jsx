import Logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
import "./header.scss";

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="BrainFlix Logo" />
      </Link>
      <div className="header__nav">
        <div className="header__nav-search">
          <input
            className="header__nav-search-field"
            type="text"
            placeholder="Search"
          ></input>
        </div>
        <button className="header__btn" href="/">
          <Link className="header__btn-link" to="/upload">
            UPLOAD
          </Link>
        </button>

        <div className="header__avatar"></div>
        
      </div>
    </header>
  );
}

export default Header;
