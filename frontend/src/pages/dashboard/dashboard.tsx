import React from 'react';
import Sidebar from '../../components/sidebar/index';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './dashboard.module.css'
import Header from '../../components/header';

interface DashboardLayoutProps {
  children: React.ReactNode; 
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
    <Router>
    <div className={styles.dashboardlayout}>
      <Sidebar />
      <main className={styles.content}>
        <Header />
        <div className={styles.mainContent}>
          <div className={styles.graphs}>
            {/* Graphs go here */}
            <div className={styles.graph1}></div>
            <div className={styles.graph2}></div>
          </div>
          <div className={styles.table}>
            {/* Table goes here */}
            <div className={styles.table1}>
            </div>
          </div>
          {/* {children} */}
        </div>
      </main>
    </div>
    </Router>
    </>
  );
};

export default DashboardLayout;
