import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchFakeData } from "../services/fake-data-service/fake-data-service";
import { FakeDataModel } from "../types/fake-data-model";

interface DataState {
	data: FakeDataModel[];
	isLoading: boolean;
	error: string | null;
	fetchData: () => Promise<void>;
	addEntry: (entry: FakeDataModel) => void;
	updateEntry: (entry: FakeDataModel, oldEntry: FakeDataModel) => void;
	resetData: () => void;
}

export const useDataStore = create<DataState>()(
	persist(
		(set, get) => {
			const fetchData = async () => {
				const { data } = get();
				if (data.length > 0) {
					console.log("Data already exists in the store");
					return;
				}

				set({ isLoading: true, error: null });
				try {
					const data = await fetchFakeData();
					set({ data, isLoading: false });
				} catch (error: unknown) {
					if (error instanceof Error) {
						set({ error: error.message, isLoading: false });
					} else {
						set({ error: "An unexpected error occurred", isLoading: false });
					}
				}
			};

			fetchData();

			return {
				data: [],
				isLoading: false,
				error: null,
				fetchData,
				addEntry: (entry) => {
					set((state) => {
						state.data.push(entry);
						return { data: state.data };
					});
				},
				updateEntry: (entry, oldEntry) => {
					set((state) => {
						const index = state.data.findIndex((item) => item === oldEntry);
						if (index !== -1) {
							state.data[index] = entry;
						}
						return { data: state.data };
					});
				},
				resetData: async () => {
					set({ isLoading: true, error: null, data: [] });
					//TODO: Implement a handler for fetching data
					try {
						const fetchedData = await fetchFakeData();
						set({ data: fetchedData, isLoading: false });
					} catch (error: unknown) {
						if (error instanceof Error) {
							set({ error: error.message, isLoading: false });
						} else {
							set({ error: "An unexpected error occurred", isLoading: false });
						}
					}
				},
			};
		},
		{ name: "data-storage", partialize: (state) => ({ data: state.data }) }
	)
);
