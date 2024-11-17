import React from "react";
import styles from "./dashboard.module.css";
import { DataTable } from "./components/data-table/data-table";
import PageLayout from "../../components/layout/page-layout";
import { TimeSeriesChart } from "./components/time-series-chart/time-series";
import { ScatterPlotChart } from "./components/scatterplot-chart/scatterplot";

const Dashboard: React.FC = () => {
  
  return (
    <PageLayout pageName="Dashboard">
      <div className={styles.mainContent}>
        <div className={styles.graphs}>
          <div className={styles.graphContainer}>
            <div className={styles.graphHeader}>
              Bitcoin Price Over Time
              <span className={styles.subHeader}>
                Last 30 Days (Daily Close)
              </span>
            </div>
            <div className={styles.graphContent}>
              <TimeSeriesChart />
            </div>
          </div>
          <div className={styles.graphContainer}>
            <div className={styles.graphHeader}>
              Correlation Analysis
              <span className={styles.subHeader}>Visualizing Scatter Data</span>
            </div>
            <div className={styles.graphContent}>
              <ScatterPlotChart />
            </div>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.table1}>
            <DataTable />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export { Dashboard };
