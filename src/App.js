import './styles/App.scss';
import Header from './components/Header/Header';
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Comments from "./components/Comments/Comments";



function App() {
  return (
    <>
      <Header 
      brainFlixLogo="Logo"
      searchIcon="Img"
      searchText="Search"
      avatar="Image"
      btnText="UPLOAD"
      uploadIcon="icon"
      btnText="UPLOAD"
      />
      <VideoPlayer />
      <VideoInfo />
      <Comments />
    </>
  );  
}

export default App;
