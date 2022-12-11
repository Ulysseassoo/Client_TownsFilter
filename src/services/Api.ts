import axios from "axios";
import { Town } from "../inteface/Town";

const apiPath = "http://localhost:3000"

export const searchCommuneName = async (nomCommune: string) : Promise<Town[]> => {
   const result = await axios.get<Town[]>(`${apiPath}/towns/search?nomCommune=${nomCommune}`);
   return result.data;
}