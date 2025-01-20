import './PageMain.css'
import Button from "../Button/Button";
import { IHogwarts } from "../../entity/Hogwarts.rdo";


const pers = ({name, image, actor, species, gender, house}: IHogwarts)=>{
    return(
        <div>

        <img className="imag" src={image}/>
        <p className="text">Персонаж: {name}</p>
        <p className="text">Актер: {actor}</p>
        <p className="text">Вид: {species}</p>
        <p className="text">Пол: {gender}</p>
        <p className="text">Факультет: {house}</p>
        <Button>Посмотреть полную информацию: </Button>
        <input></input>
        </div>
    )

}

export default pers