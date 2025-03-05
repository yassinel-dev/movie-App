import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <h1>Movie App</h1>
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">Favorite</a>
        </li>
      </ul>
    </div>
  );
}
