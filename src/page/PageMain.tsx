import './PageMain.css'
import { IHogwarts } from '../entity/Hogwarts.rdo';
const Page = () =>{

    return(
        <div className="inputandbtn">
            <p>Напишите имя и фамилию персонажа:</p>
            <input></input>
            <button>Найти</button>
        </div>
    );
}
export default Page