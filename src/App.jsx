import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
function App() {
  return (
    <div className="App">
      <Header />
      <MovieCard movie={{ title: "Tim's Film", release_date: "2024" }} />
    </div>
  );
}

export default App;
