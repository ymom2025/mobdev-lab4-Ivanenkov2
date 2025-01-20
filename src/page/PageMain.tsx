import {SetStateAction, useState} from "react"
import './PageMain.css'
import axioshogwarts from "../shared/api";
const Page = () =>{


    const[namee, setName] = useState('')
    const[actor, setActor] = useState('')
    const[species, setSpecies] = useState('')
    const[gender, setGender] = useState('')
    const[house, setHouse] = useState('')

    
    const handleChange = (e:{ target: {value: SetStateAction<string>}}) =>{ setName(e.target.value)}


    const handlesubmit= async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const resulthogwarts = (await axioshogwarts.hogwartsrequest(namee))

        setActor(resulthogwarts[0].actor.toString())
        setSpecies(resulthogwarts[0].species.toString())
        setGender(resulthogwarts[0].gender.toString())
        setHouse(resulthogwarts[0].house.toString())
    }
    return(
        <div className="inputandbtn">
            <form className="form" onSubmit={handlesubmit} >
            <div className="divmain">
                <img className="imag"/>
                <p className="text">Персонаж: {namee}</p>
                <p className="text">Актер: {actor}</p>
                <p className="text">Вид: {species}</p>
                <p className="text">Пол: {gender}</p>
                <p className="text">Факультет: {house}</p>

            </div>
                
                <input placeholder="Напишите имя и фамилию персонажа" onChange={handleChange}/>
            <button>Найти</button>
            </form>
        </div>
    )
}
export default Page