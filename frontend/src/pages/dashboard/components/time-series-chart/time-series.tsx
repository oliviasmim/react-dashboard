import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { fetchCurrencyData } from "../../../../services";

const TimeSeriesChart: React.FC = () => {
	const [chartData, setChartData] = useState<{
		time: string[];
		price: number[];
	}>({ time: [], price: [] });

	const colors = {
		purple: {
			default: "rgba(149, 76, 233, 1)",
			half: "rgba(149, 76, 233, 0.5)",
			quarter: "rgba(149, 76, 233, 0.25)",
			zero: "rgba(149, 76, 233, 0)",
		},
		indigo: {
			default: "rgba(80, 102, 120, 1)",
			quarter: "rgba(80, 102, 120, 0.25)",
		},
		blue: {
			default: "#6495ed",
			half: "#3b74dd40",
			quarter: "#527fd3",
			line: "#3b74dd",
		},
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchCurrencyData("BTCUSDT", "1d", 30);

			const time = data.map((entry: any) =>
				new Date(entry[0]).toLocaleDateString()
			);
			const price = data.map((entry: any) => parseFloat(entry[4]));

			setChartData({ time, price });
		};

		fetchData();
	}, []);

	const minValue = Math.min(...chartData.price) * 0.95;
	const maxValue = Math.max(...chartData.price) * 1.05;

	const options = {
		title: {
			left: "center",
		},
		tooltip: {
			trigger: "axis",
			formatter: (params: any) => {
				const { name, value } = params[0];
				const formattedValue = new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD",
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				}).format(value);

				return `
          <strong>Date:</strong> ${name}<br />
          <strong>Close Price:</strong> ${formattedValue}
        `;
			},
		},

		grid: {
			left: "5%",
			right: "5%",
			top: "10%",
			bottom: "10%",
			containLabel: true,
		},
		xAxis: {
			type: "category",
			data: chartData.time,
		},
		yAxis: {
			type: "value",
			min: minValue,
			max: maxValue,
			axisLabel: {
				formatter: (value: number) => {
					if (value === minValue) {
						return "";
					}
					return value.toFixed(0);
				},
			},
		},
		series: [
			{
				data: chartData.price,
				type: "line",
				smooth: true,
				lineStyle: {
					color: colors.blue.line,
					width: 2,
				},
				areaStyle: {
					color: colors.blue.half,
				},
			},
		],
	};

	return <ReactECharts option={options} style={{ width: "100%" }} />;
};

export default TimeSeriesChart;
