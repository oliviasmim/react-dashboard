import { fetchData } from "../data-fetcher";

const BASE_URL = "https://api.binance.com/api/v3/klines";

export const fetchCurrencyData = async (
	symbol: string,
	interval: string,
	limit: number
) => {
	return await fetchData({
		url: BASE_URL,
		params: {
			symbol,
			interval,
			limit,
		},
		method: "GET",
	});
};
