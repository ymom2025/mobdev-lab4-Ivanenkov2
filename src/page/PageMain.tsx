import './PageMain.css'
import Feed from '../components/Feed/Feed'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { IHogwarts } from '../entity/Hogwarts.rdo'
import Button from '../components/Button/Button'
import hogwartsAPI from '../shared/api'
import Input from '../components/Input/Input'

const PageMain = () => {
    const [value, setValue] = useState("")
    const [perz, setPerz] = useState<IHogwarts[]>([]);
    const [filterperz, setFilterperz] = useState<IHogwarts[]>([]);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //setPerz((await hogwartsAPI.axioshogwarts()));
    }
    
    useEffect (() =>{
        setFilterperz(perz.filter((name) => name.name.includes(value)))
        console.log(filterperz);
        
    }, [value]);
    
    
    useEffect(() => {
        const viZOV = async () => {
            const response = await hogwartsAPI.axioshogwarts()
            setFilterperz(response)
            setPerz(response);
        }
        viZOV();
    }, []);
    return (
        <div className="inputandbtn">
            <form onSubmit={handleSubmit}>
                <Input value={value} setValue={setValue} placevalue="Напишите имя и фамилию персонажа" />

            </form>
            <Feed perz={filterperz}></Feed>
        </div>
    )
}

export default PageMain