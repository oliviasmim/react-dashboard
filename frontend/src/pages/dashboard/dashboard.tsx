import React from 'react';
import Sidebar from '../../components/sidebar/index';
import styles from './dashboard.module.css'

interface DashboardLayoutProps {
  children: React.ReactNode; 
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className={styles.dashboardlayout}>
      <Sidebar />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
