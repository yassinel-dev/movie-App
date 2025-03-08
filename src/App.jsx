import "./css/App.css";
import NavBar from "./components/NavBar";
import Favorites from "./pages/favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  const movieNumber = 1;
  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
