import { TbBellRingingFilled } from "react-icons/tb";
import "./card.css";
const Search = ({ search, setSearch, open, setOpen }) => {
  return (
    <div className="search">
      <div class="vertical-line"></div>
      <h1>ALERTS</h1>
      <input
        placeholder="Search By..."
        onChange={(e) => setSearch(() => e.target.value)}
      />
      <div className="profile-icon">
        <div className="notification">
          <TbBellRingingFilled
            size="25"
            color="rgba(83, 172, 255, 1)"
            className="icon"
          />
          <div className="number">6</div>
        </div>
      </div>
      <button
        className="filter-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        Filter
      </button>
    </div>
  );
};

export default Search;
