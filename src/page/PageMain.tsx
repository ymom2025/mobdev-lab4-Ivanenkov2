import './PageMain.css'
import Feed from '../components/Feed/Feed'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { IHogwarts } from '../entity/Hogwarts.rdo'
import Button from '../components/Button/Button'
import hogwartsAPI from '../shared/api'
import Input from '../components/Input/Input'

type TGender = "female" | "male" | undefined

const PageMain = () => {
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState<TGender>(undefined)
    const [perz, setPerz] = useState<IHogwarts[]>([]);
    const [filterperz, setFilterperz] = useState<IHogwarts[]>([]);

    useEffect(() => {
        let filteredPerz = [...perz]
        // console.log(filteredPerz);
        
        if (value.length > 0) {
            filteredPerz = filteredPerz.filter((name) => name.name.includes(value))
        }

        if (value2) {
            filteredPerz = filteredPerz.filter((pol) => pol.gender != value2)
        }

        // console.log(filteredPerz);

        setFilterperz(filteredPerz)
    }, [value, value2]);

    useEffect(() => {
        console.log(filterperz);

    }, [filterperz])

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
            <form>
                <Input value={value} setValue={setValue} placevalue="Напишите имя и фамилию персонажа" />
                <select value={value2} onChange={(e) => setValue2(e.currentTarget.value as TGender)}>

                    <option></option>
                    <option value="female">male</option>
                    <option value="male">female</option>
                </select>
            </form>
            <Feed perz={filterperz}></Feed>
        </div>
    )
}

export default PageMain