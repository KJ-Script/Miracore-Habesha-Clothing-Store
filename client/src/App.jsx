import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Miscellaneous from "./pages/Miscellaneous";
import Women from "./pages/Women";
import Shopping from "./pages/Shopping";

function App() {

  return (
    <div className="font-outfit">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route exact path="/shopping" element={<Shopping />} /> */}
          <Route exact path="/shoppingmen" element={<Men />} />
          <Route exact path="/shoppingwomen" element={<Women />} />
          <Route exact path="/shoppingkids" element={<Kids />} />
          <Route exact path="/shoppingother" element={<Miscellaneous />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
