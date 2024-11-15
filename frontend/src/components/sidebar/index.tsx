import React from 'react';
import styles from './sidebar.module.css'; 

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
