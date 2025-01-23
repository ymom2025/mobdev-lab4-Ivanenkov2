import axios from "axios"
import { IHogwarts } from "../entity/Hogwarts.rdo";

const axioshogwartssite = axios.create({
  baseURL: "https://hp-api.herokuapp.com/",
});

const hogwartsAPI = {
  axioshogwarts: async () => {
    const reponse = await axioshogwartssite.get<IHogwarts[]>("api/characters")
    return reponse.data
  },
  Id: async (id:string) => {
    const reponse2 = await axioshogwartssite.get<IHogwarts>(`/pers/${id}`)
    return reponse2.data
  }
}

export default hogwartsAPI