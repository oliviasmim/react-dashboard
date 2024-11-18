import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import Logo from "../../../public/logo.png";
import { Image } from "react-bootstrap";
import Avatar from "../../../public/User-avatar.svg.webp";
import { Tooltip } from "react-tooltip";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: "bi-columns-gap" },
    { to: "/analytics", label: "Analytics", icon: "bi-bar-chart" },
    { to: "/settings", label: "Settings", icon: "bi-gear" },
    { to: "/profile", label: "Profile", icon: "bi-person" },
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
          {!collapsed && <span>lawbrokr</span>}
        </div>
        <button
          className={styles.collapseBtn}
          onClick={() => setCollapsed(!collapsed)}
        >
          <i
            className={`bi ${collapsed ? "bi-chevron-right" : "bi-chevron-left"}`}
          ></i>
        </button>
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
              data-tooltip-id={`tooltip-${item.label}`}
              data-tooltip-content={item.label}
            >
              <li>
                <div className={styles.itemContent}>
                  <i className={`bi ${item.icon}`}></i>
                  {!collapsed && item.label}
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>

      {collapsed && (
        <div>
          {navItems.map((item) => (
            <Tooltip key={item.to} id={`tooltip-${item.label}`} place="right" effect="solid" />
          ))}
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.avatar}>
          <Image src={Avatar} rounded />
        </div>
        {!collapsed && (
          <div className={styles.userinfo}>
            <span>John Doe</span>
            <p>User</p>
          </div>
        )}
        <i className="bi bi-box-arrow-right"></i>
      </div>
    </aside>
  );
};

export default Sidebar;
