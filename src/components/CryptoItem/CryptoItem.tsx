
import { ICrypto } from "../../entity/Crypto.rdo";
const cryptoitem = ({symbol,name, total_supply,circulating_supply}: ICrypto)=>{
    return(
        <div>
            <img src={symbol}/>
            <h1>{name}</h1>
            <h1>{total_supply}</h1>
            <h1>{circulating_supply}</h1>
        </div>

    )
}

export default cryptoitem