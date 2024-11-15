import React from "react";
// import { useState } from "react";
import Sidebar from "../../components/sidebar/index";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./dashboard.module.css";
import Header from "../../components/header";
// import ToggleButton from "react-bootstrap/ToggleButton";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  
  // const [checked, setChecked] = useState(false);
  // const [radioValue, setRadioValue] = useState("1");

  // const radios = [
  //   { name: "Graphs", value: "1" },
  //   { name: "Analytics", value: "2" },
  // ];

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <>
      <Router>
        <div className={styles.dashboardlayout}>
          <Sidebar />
          <main className={styles.content}>
            <Header />
            <div className={styles.mainContent}>
              <div className={styles.contentbuttons}>
                {/* <ButtonGroup className={styles.buttonGroup}>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                      className={`${styles.toggleButton} ${
                        radio.value === radioValue
                          ? styles.toggleButtonActive
                          : ""
                      } ${
                        idx % 2 ? styles.outlineSuccess : styles.outlineDanger
                      }`}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup> */}

                <Breadcrumb>
                  <Breadcrumb.Item active style={{ color: "#636363" }}>
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active style={{ color: "#636363" }}>
                    Library
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                    active
                    style={{ color: "#000", fontWeight: "bold" }}
                  >
                    Dashboard
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Button
                  as="input"
                  type="reset"
                  className={styles.buttonreset}
                  value="Reset"
                />

                <Button className={styles.btnCustom}>
                  Custom Bootstrap Button
                </Button>
              </div>
              <div className={styles.graphs}>
                {/* Graphs go here */}
                <div className={styles.graph1}> grafico de linha </div>
                <div className={styles.graph2}> grafico de pontos </div>
              </div>
              <div className={styles.table}>
                {/* Table goes here */}
                <div className={styles.table1}>tabela</div>
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
