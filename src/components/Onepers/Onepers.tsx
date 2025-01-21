import { Navigate, useNavigate } from "react-router"
import Button from "../Button/Button";
import { IHogwarts } from "../../entity/Hogwarts.rdo";


const Pers = ({name, image, actor, species, gender, house, id}: IHogwarts)=>{
    const navigate = useNavigate();
    return(
        <div>

        <img className="imag" src={image}/>
        <p className="text">Персонаж: {name}</p>
        <p className="text">Актер: {actor}</p>
        <p className="text">Вид: {species}</p>
        <p className="text">Пол: {gender}</p>
        <p className="text">Факультет: {house}</p>
        <Button onClick={()=> navigate("/"+id)}>Посмотреть полную информацию</Button>
        
        </div>
    )

}

export default Pers