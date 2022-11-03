import Logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import Button from "../../assets/images/Icons/upload.svg";

import "./header.scss";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="BrainFlix Logo" />
      <div className="header__nav">
        <div className="header__nav-search">
       
          <input
            className="header__nav-search-field"
            type="text"
            velue
            placeholder="Search"
          ></input>
        </div>
        <button className="header__btn" href="/"><img className="header__upload-btn" src={Button}/>
          UPLOAD
        </button>
        
          <img className="header__avatar" src={Avatar} alt="user image" />
        
      </div>
    </header>
  );
}

export default Header;
