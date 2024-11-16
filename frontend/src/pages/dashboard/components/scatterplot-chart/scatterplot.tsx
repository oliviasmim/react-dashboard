import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { fetchChartData } from "../../../../services/fetch-binance-service/fetch-binance-service"; // Importa o serviço

const ScatterPlotChart: React.FC = () => {
  const [scatterData, setScatterData] = useState<number[][]>([]);
  const [maxVolume, setMaxVolume] = useState<number>(1);
  const [maxPercentDiff, setMaxPercentDiff] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: number[][] = await fetchChartData("BTCUSDT", "1d", 180);

        const scatter = data.map((entry: number[]) => {
          const volume = parseFloat(entry[7] as unknown as string); // Volume
          const high = parseFloat(entry[2] as unknown as string); // High
          const low = parseFloat(entry[3] as unknown as string); // Low
          const percentDiff = ((high - low) / low) * 100; // Percent difference

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
      name: "Volume",
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
      left: "10%",
      right: "10%",
      top: "15%",
      bottom: "15%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
      name: "% Difference (High-Low)",
    },
    series: [
      {
        data: scatterData,
        type: "scatter",
        symbolSize: 5,
        markLine: {
          animation: false,
          lineStyle: {
            type: "solid",
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

  return <ReactECharts option={options} style={{ height: 350, width: "100%" }} />;
};

export default ScatterPlotChart;
