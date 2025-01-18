import { IFruits } from "../../entity/Fruit.rdo"
import fruitsitem from "../FruitsItem/FruitsItem"
const Feed =({fruit}: {fruit: IFruits}) =>{
   
    return(
        <div className="feed">
             {/* fruit.genus((fruiit)=> <fruitsitem key={fruit.id} {...fruiit}/> ) */}
        </div>
    )
}

export default Feed