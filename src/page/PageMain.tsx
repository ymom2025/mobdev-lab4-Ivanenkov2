import './PageMain.css'
import Feed from '../components/Feed/Feed'
import { useState } from 'react'
import { IHogwarts } from '../entity/Hogwarts.rdo'
import axioshogwarts from '../shared/api'
import Input from '../components/Input/Input'

const PageMain = () =>{
    const [value, setValue] = useState("")
    const [perz, setPerz] = useState<IHogwarts[]>([]);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPerz((await axioshogwarts.hogwartsrequest(value)));
    }
    return(
        <div className="inputandbtn">  
        <form onSubmit={handleSubmit}>
            <Input value={value}  setValue={setValue} placevalue="Напишите имя и фамилию персонажа"/>
            <button>Найти</button>
            </form>  
           <Feed perz={perz}></Feed>  
        </div>
    )
}

export default PageMain