import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinScreen from "./Components/View/JoinScreen";
import MainScreen from "./Components/MainView/MainScreen";
import LanguageFile from "./LanguageFile";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
 
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="type/:id" element={<NavBar />} />
          <Route path="join" element={<JoinScreen />} />
          <Route path="language" element={<LanguageFile />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
