import React from "react";
import styles from "./dashboard.module.css";
import { DataTable } from "./components/data-table/data-table";
import PageLayout from "../../components/layout/page-layout";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
	return (
		<PageLayout pageName="Dashboard">
			<div className={styles.mainContent}>
				<div className={styles.graphs}>
					{/* Graphs go here */}
					<div className={styles.graph1}> grafico de linha </div>
					<div className={styles.graph2}> grafico de pontos </div>
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

export default DashboardLayout;
