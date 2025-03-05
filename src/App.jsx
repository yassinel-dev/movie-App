import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
function App() {
  const movieNumber = 1;
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
