import { Navigate, useNavigate } from "react-router";
import { IFruits } from "../../entity/Fruit.rdo";
const fruitsitem = ({name, family,genus,order}: IFruits)=>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>{name}</h1>
            <h1>{family}</h1>
            <h1>{genus}</h1>
            <h1>{order}</h1>
            <button onClick={() => navigate}>Перейти на фрукт</button>
        </div>

    )
}

export default fruitsitem