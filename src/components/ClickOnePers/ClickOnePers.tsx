import { useState } from "react"
import Button from "../Button/Button"
import { IHogwarts } from "../../entity/Hogwarts.rdo"
import "./ClickOnePers.css"
import { useNavigate } from "react-router"
const click= ()=>{
    const [person, setPerson] = useState<IHogwarts>();
    const navigate = useNavigate();
    return(
        <div className="full">
            
            <img/>
            <h2>{person?.actor}</h2>
            <h2>{}</h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <Button className="cls" onClick={()=> navigate(-1)}>Вернуться назад</Button>
        
        </div>
    )
}