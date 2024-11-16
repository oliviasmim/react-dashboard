import axios from "axios";

const BASE_URL = "https://api.binance.com/api/v3/klines";

export const fetchChartData = async (
  symbol: string,
  interval: string,
  limit: number
) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        symbol,
        interval,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching chart data:", error);
    throw error;
  }
};
