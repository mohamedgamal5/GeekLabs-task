import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaFolderOpen } from "react-icons/fa6";
import { TbBellRingingFilled } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";

import "./sidebar.css";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {sidebar && (
        <div className="navbar">
          <div onClick={toggleSidebar}>
            <img className="logo" src="logo.png" alt="logo" />
          </div>
          <div className="icon-list">
            <img className="icon2" src="../coloralarm.png" />
            <img className="icon" src="../cap.png" />
            <img className="icon" src="../setting.png" />
            <img className="icon" src="../folder.png" />
          </div>

          <div className="profile-icon">
            <div className="notification">
              <img className="icon2" src="../coloralarm.png" />

              <div className="number">6</div>
            </div>
            <img src="../user.png" />
          </div>
        </div>
      )}
      {!sidebar && (
        <div className="sidebar">
          <div onClick={toggleSidebar}>
            <img className="logo" src="logo.png" alt="logo" />
          </div>
          <div className="icon-list">
            <div className="icon-wrapper">
              <img className="icon2" src="../alarm.png" />

              <span>Alert</span>
            </div>
            <div className="icon-wrapper">
              <img className="icon" src="../cap.png" />
              <span>Training</span>
            </div>

            <div className="icon-wrapper">
              <img className="icon" src="../setting.png" />
              <span>Automation</span>
            </div>

            <div className="icon-wrapper">
              <img className="icon" src="../folder.png" />
              <span>Portfolio</span>
            </div>
          </div>

          <div className="profile-icon">
            <img src="../user.png" />
            <div>
              <p>name</p>
              <p>level</p>
            </div>
          </div>
          <div className="company"> Street Suite. 2.0</div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
