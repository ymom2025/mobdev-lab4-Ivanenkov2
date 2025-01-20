import './PageMain.css'
import Feed from '../components/Feed/Feed'
import { useState } from 'react'
import { IHogwarts } from '../entity/Hogwarts.rdo'
import axioshogwarts from '../shared/api'


const PageMain = () =>{
    // const [per, setPer] = useState<IHogwarts[]>
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     setPer((await axioshogwarts.hogwartsrequest(per)).map);
    
    return(
        <div className="inputandbtn">    
                <input placeholder="Напишите имя и фамилию персонажа" />
            <button>Найти</button>
           {/* <Feed per={per}></Feed> */}
        </div>
    )
}

export default PageMain