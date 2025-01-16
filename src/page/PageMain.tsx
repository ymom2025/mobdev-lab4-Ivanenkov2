import './PageMain.css'
import {ICrypto} from "../entity/Crypto.rdo"
const Feed =({crypt}: {crypt: ICrypto}) =>{
    return(
        <div></div>
    )
}
const Page = () =>{

    return(
       
        <div className="inputandbtn">


            <p>Напишите название криптовалюты:</p>
            <input></input>
            <button>Найти</button>
        </div>
    );
}
export default Page