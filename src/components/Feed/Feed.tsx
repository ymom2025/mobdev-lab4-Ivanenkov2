import { IHogwarts } from "../../entity/Hogwarts.rdo";
import Pers from "../Onepers/Onepers";
const Feed= ({perz}: {perz: IHogwarts[]}) =>{
    return(
        <div className="feed">
            {perz.map((onepers)=> <Pers key={onepers.id} {...onepers}/>)}  
        </div>
    )
}

export default Feed