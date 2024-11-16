import React from "react";
import styles from "./dashboard.module.css";
import { DataTable } from "./components/data-table/data-table";
import PageLayout from "../../components/layout/page-layout";
import { TimeSeriesChart } from "./components/time-series-chart/time-series";
import { ScatterPlotChart } from "./components/scatterplot-chart/scatterplot";

interface DashboardProps {
	children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = () => {
	return (
		<PageLayout pageName="Dashboard">
			<div className={styles.mainContent}>
				<div className={styles.graphs}>
					<div className={styles.graph1}>
						<TimeSeriesChart />
					</div>
					<div className={styles.graph2}>
						<ScatterPlotChart />
					</div>
				</div>
				<div className={styles.table}>
					{/* Table goes here */}
					<div className={styles.table1}>
						<DataTable />
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export { Dashboard };
