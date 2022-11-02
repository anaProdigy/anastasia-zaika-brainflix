import './App.scss';
import Header from './components/Header/Header';
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Comments from "./components/Comments/Comments";



function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer/>
      <VideoInfo/>
      <Comments />
    </div>
  );  
}

export default App;
