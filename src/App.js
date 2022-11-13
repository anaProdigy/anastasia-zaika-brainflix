import "./styles/App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Upload from "./pages/Upload/Upload";
import Publish from "./pages/Publish/Publish";
import NotFound from "./pages/NotFound/NotFound";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":videoId" element={<Home />} />
        <Route path="upload" element={<Upload />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
