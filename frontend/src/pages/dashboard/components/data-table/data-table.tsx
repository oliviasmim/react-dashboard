import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useDataStore } from "../../stores/data-store";
import { FakeDataModel } from "../../../../services/fake-data-service";
import { Button } from "react-bootstrap";
import { colDefs, gridOptions } from "./constants";
import { AddEntryModal } from "../add-entry-modal/add-entry-modal";
import styles from "./data-table.module.css";

export const DataTable = () => {
  const data = useDataStore((state) => state.data);
  // const isLoading = useDataStore((state) => state.isLoading);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.tableHeader}>
        <h5>Table data</h5>
        <Button onClick={() => setShowModal(true)}>
          <i className="bi bi-plus-lg"></i> Add Entry
        </Button>
      </div>
      <div className="ag-theme-quartz" style={{ height: 500, width: "100%" }}>
        <AgGridReact<FakeDataModel>
          gridOptions={gridOptions}
          rowData={data}
          columnDefs={colDefs}
          domLayout="autoHeight"
          pagination={true}
          paginationPageSize={15}
          suppressServerSideFullWidthLoadingRow={true}
          paginationPageSizeSelector={[15, 30, 50]}
        />
      </div>
      <AddEntryModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};
