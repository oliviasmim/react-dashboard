import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridOptions } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { CheckCircleRenderer } from "./check-circle-renderer";
import { AnchorLinkRenderer } from "./anchor-link-renderer";
import { useDataStore } from "../../stores/data-store";
import { FakeDataModel } from "../../../../services/fake-data-service";

export const DataTable: React.FC = () => {
	const data = useDataStore((state) => state.data);
	// const isLoading = useDataStore((state) => state.isLoading);

	const gridOptions: GridOptions = {
		defaultColDef: {
			resizable: true,
			sortable: true,
			filter: true,
			enableRowGroup: true,
		},
	};

	const colDefs: ColDef<FakeDataModel>[] = [
		{ headerName: "Company", field: "company", sortable: true, filter: true },
		{ headerName: "Country", field: "country", sortable: true, filter: true },
		{ headerName: "State", field: "state", sortable: true, filter: true },
		{ headerName: "City", field: "city", sortable: true, filter: true },
		{ headerName: "Zipcode", field: "zipcode", sortable: true, filter: true },
		{ headerName: "Employees", field: "employees", type: "numberColumn" },
		{
			headerName: "Revenue",
			field: "revenue",
			type: "numberColumn",
			sortable: true,
		},
		{
			headerName: "Website",
			field: "website",
			cellRenderer: AnchorLinkRenderer,
		},
		{ headerName: "Sales Rep", field: "sales_rep" },
		{
			headerName: "Last Contacted",
			field: "last_contacted",
			type: "dateColumn",
		},
		{
			headerName: "Purchased",
			field: "purchased",
			cellRenderer: CheckCircleRenderer,
		},
		{
			headerName: "Notes",
			field: "notes",
			wrapText: true,
			tooltipField: "notes",
		},
	];

	return (
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
	);
};
