/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { fetchCurrencyData } from "../../../../services";

const ScatterPlotChart: React.FC = () => {
	const [scatterData, setScatterData] = useState<number[][]>([]);
	const [maxVolume, setMaxVolume] = useState<number>(1);
	const [maxPercentDiff, setMaxPercentDiff] = useState<number>(1);

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
			default: "#5BC4FF",
			half: "#3b74dd40",
			pink: "#FF5BEF",
			quarter: "#527fd3",
			line: "#3b74dd",
			background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 44%, rgba(0,212,255,1) 100%)",
		},
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data: any = await fetchCurrencyData("BTCUSDT", "1d", 180);
				const scatter = data.map((entry: number[]) => {
					const volume = parseFloat(entry[7] as unknown as string);
					const high = parseFloat(entry[2] as unknown as string);
					const low = parseFloat(entry[3] as unknown as string);
					const percentDiff = ((high - low) / low) * 100;

					return [volume, percentDiff];
				});

				setScatterData(scatter);

				const volumes = scatter.map((d) => d[0]);
				const percentDiffs = scatter.map((d) => d[1]);
				setMaxVolume(Math.max(...volumes));
				setMaxPercentDiff(Math.max(...percentDiffs));
			} catch (error) {
				console.error("Error processing chart data:", error);
			}
		};

		fetchData();
	}, []);

	const options = {
		title: {
			left: "center",
		},
		tooltip: {
			trigger: "item",
			formatter: (params: any) => {
				const [volume, percentDiff] = params.data;
				return `
          <strong>Volume:</strong> ${volume.toFixed(2)}<br />
          <strong>% Difference:</strong> ${percentDiff.toFixed(2)}%
        `;
			},
		},
		xAxis: {
			type: "value",
			axisLabel: {
				formatter: (value: number) => {
					if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
					if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
					if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
					return value.toFixed(0);
				},
			},
		},
		grid: {
			left: "5%",
			right: "5%",
			top: "10%",
			bottom: "10%",
			containLabel: true,
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: scatterData,
				type: "scatter",
				symbolSize: 7,
				markLine: {
					animation: false,
					lineStyle: {
						type: "solid",
						color: {
					  type: "linear",
					  x: 0,
					  y: 0,
					  x2: 1,
					  y2: 1,
					  colorStops: [
						{ offset: 0, color: colors.blue.default },  
						{ offset: 1, color: colors.blue.pink },    
					  ],
					  globalCoord: false,
					},
					width: 3,

						
					},
					label: {
						align: "right",
					},
					data: [
						[
							{ coord: [0, 0], symbol: "none" },
							{ coord: [maxVolume, maxPercentDiff], symbol: "none" },
						],
					],
				},
			},
		],
	};

	return <ReactECharts option={options} style={{ width: "100%", height: "100%" }} />;
};

export { ScatterPlotChart };
