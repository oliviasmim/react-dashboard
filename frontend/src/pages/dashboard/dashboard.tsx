import React from 'react';
import Sidebar from '../../components/sidebar/index';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './dashboard.module.css'

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
        {children}
      </main>
    </div>
    </Router>
    </>
  );
};

export default DashboardLayout;
