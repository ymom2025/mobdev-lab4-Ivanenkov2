import React from "react";
interface IInput {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placevalue: "Напишите имя и фамилию персонажа";
}

const Input = ({ value, setValue , placevalue}: IInput) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return <input type={value} onChange={handleChange} placeholder={placevalue}/>;
};

export default Input;