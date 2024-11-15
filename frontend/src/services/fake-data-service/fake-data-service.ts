import { FakeDataModel } from "../../types/fake-data-model";
import { fetchData } from "../data-fetcher";

const API_URL =
	"https://fakerapi.it/api/v2/custom?_quantity=10&company=company_name&country=country&state=state&city=city&zipcode=postcode&employees=counter&revenue=number&website=website&sales_rep=first_name&last_contacted=date&purchased=boolean&notes=text";

export const fetchFakeData = async (): Promise<FakeDataModel[]> => {
	return await fetchData<FakeDataModel[]>({
		url: API_URL,
		method: "GET",
	});
};
