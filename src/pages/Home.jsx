import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "jon wick", release_date: "2020" },
    { id: 2, title: "yassine wick", release_date: "2000" },
    { id: 3, title: "dami wick", release_date: "2006" },
    { id: 4, title: "dami yassine", release_date: "2016" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search dor movies ..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
