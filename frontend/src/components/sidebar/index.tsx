import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import Logo from "../../../public/logo.png";
import { Image } from "react-bootstrap";
import Avatar from '../../../public/User-avatar.svg.webp'

const Sidebar: React.FC = () => {
  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: "bi-columns-gap" },
    { to: "/analytics", label: "Analytics", icon: "bi-bar-chart" },
    { to: "/settings", label: "Settings", icon: "bi-gear" },
    { to: "/profile", label: "Profile", icon: "bi-person" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
        <span>lawbrokr</span>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
              }
            >
              <li>
                <i className={`bi ${item.icon}`}></i>
                {item.label}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <Image src={ Avatar } className={styles.avatar} rounded />
        <div className={styles.userinfo}>
          <span>John Doe</span>
          <p>User</p>
        </div>
        <i className="bi bi-box-arrow-right"></i>
      </div>
    </aside>
  );
};

export default Sidebar;
