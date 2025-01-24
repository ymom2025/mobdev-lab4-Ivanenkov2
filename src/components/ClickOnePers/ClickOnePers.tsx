import { useState } from "react"
import Button from "../Button/Button"
import { IHogwarts } from "../../entity/Hogwarts.rdo"
import { useEffect } from "react"
import "./ClickOnePers.css"
import axioshogwarts from "../../shared/api"
import { useNavigate, useParams } from "react-router"
const Click= ()=>{
    const [person, setPerson] = useState<IHogwarts | undefined>(undefined);
    const {id} = useParams();
    useEffect(() => {

        const idd = async () =>{
            if(id){
                const iddd = await axioshogwarts.Id(id)
                setPerson(iddd)
            }
        };
        idd()
    },[]);
    const navigate = useNavigate();
    return(
        <div className="full">
            {person &&(
                <div className="content">
                    
            <img className="image" src={person.image}/>
            <div className="Texti">
            <h2>Персонаж: {person.name}</h2>
            <h2>Актер: {person.actor}</h2>
            <h2>Вид: {person.species}</h2>
            <h2>Пол: {person.gender}</h2>
            <h2>Факультет: {person.house}</h2>
            <h2>Альтернативные имена: {person.alternate_names}</h2>
            <h2>Дата рождения: {person.dateOfBirth}</h2>
            <h2>Год рождения: {person.yearOfBirth}</h2>
            <h2>Является магом: {person.wizard ? "Да":"Нет"}</h2>
            <Button className="cls" onClick={()=> navigate(-1)}>Вернуться назад</Button>
            </div>
       
                </div>
            )}
        </div>
    )
}

export default Click