import { useState } from "react";
import FilterModal from "../../components/filter/FilterModal";
import Main from "../../components/main/Main";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="home"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "rgba(65, 64, 64, 1)",
      }}
    >
      <Sidebar />
      <Main open={open} setOpen={setOpen} />
      <FilterModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
