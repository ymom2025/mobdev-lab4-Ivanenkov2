import axios from "axios"
import { IHogwarts } from "../entity/Hogwarts.rdo";

const axioshogwartssite =axios.create({
        baseURL: "https://hp-api.herokuapp.com/",
      });

const axioshogwarts = {
      hogwartsrequest: async(namepers: string) =>{

        const reponse = await axioshogwartssite.get<IHogwarts>("api/characters")
        console.log(reponse.data)
        return reponse.data
      }
}

export default axioshogwarts