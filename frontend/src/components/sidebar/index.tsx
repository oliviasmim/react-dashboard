import React from "react";
import styles from "./sidebar.module.css";
import Logo from "../../../public/logo.png";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
        <span>lawbrokr</span>
      </div>
      <nav>
        <ul>
          <li>
            <i className="bi bi-columns-gap"></i>
            <a href="#home">Dashboard</a>
          </li>
          <li>
            <i className="bi bi-bar-chart"></i>{" "}
            <a href="#analytics">Analytics</a>
          </li>
          <li>
            <i className="bi bi-gear"></i>
            <a href="#settings">Settings</a>
          </li>
          <li>
            <i className="bi bi-person"></i>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#logout">Logout</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
