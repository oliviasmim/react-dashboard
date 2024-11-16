import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "./layout.module.css";
import Sidebar from "../sidebar";
import Header from "../header";

interface PageLayoutProps {
	children: React.ReactNode;
	pageName: string;
}
//TODO: Remove the Router from here and add it to the App.tsx file
//TODO: Use camelCase for the styles object

const PageLayout: React.FC<PageLayoutProps> = ({ children, pageName }) => {
	return (
		<>
			<Router>
				<div className={styles.dashboardlayout}>
					<Sidebar />
					<main className={styles.content}>
						<Header />
						<div className={styles.contentbuttons}>
							<Breadcrumb>
								<Breadcrumb.Item active style={{ color: "#636363" }}>
									Home
								</Breadcrumb.Item>
								<Breadcrumb.Item
									active
									style={{ color: "#000", fontWeight: "bold" }}
								>
									{pageName}
								</Breadcrumb.Item>
							</Breadcrumb>
						</div>

						{children}
					</main>
				</div>
			</Router>
		</>
	);
};

export default PageLayout;
