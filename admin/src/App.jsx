import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory";
import Orders from "./Pages/Orders";
import ProfilePage from "./Pages/ProfilePage";
import CreateAccount from "./Pages/CreateAccount";

export const LoginContext = createContext()

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
    <div className="font-outfit">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/create" element={<CreateAccount />} />
        </Routes>
      </Router>
    </div>
    </LoginContext.Provider>
  );
}

export default App;
