import { IHogwarts } from "../../entity/Hogwarts.rdo";
import Pers from "../Onepers/Onepers";
import "./Feed.css"
const Feed= ({perz}: {perz: IHogwarts[]}) =>{
    return(
        <div className="feed">
            {perz.slice(0,10).map((onepers)=> <Pers key={onepers.id} {...onepers}/>)}  
        </div>
    )
}

export default Feed