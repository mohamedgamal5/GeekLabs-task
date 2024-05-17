import { useState } from "react";
import CardList from "../card/CardList";
import Search from "../card/Search";
import "./main.css";
const Main = ({ open, setOpen }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="main">
      <Search
        search={search}
        setSearch={setSearch}
        open={open}
        setOpen={setOpen}
      />
      <div className="list">
        <CardList />
      </div>
    </div>
  );
};

export default Main;
