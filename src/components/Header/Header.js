//import searchIcon from './search.svg';
import "./header.scss";


function Header(props) {

  return (
    <header className="header">
      <img src={props.brainFlixLogo} alt="BrainFlix Logo" />
      <div className="header__nav">
        <div className="header__nav-search">
          <img
            className="header__nav-search-icon"
            src={props.searchIcon}
            alt="Search Icon"
          />
          <input className="header__nav-search-field"></input>
        </div>
        <button>{props.btnText}</button>
        {/* <a className="header__mainBtn"></a> */}
        <img className="header__avatar" src={props.avatar} alt="user image" />
      </div>
    </header>
  );
}










export default Header;