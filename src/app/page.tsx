"use client"

import Cards from "@/components/Cards";
import Descriptions from "@/components/Descriptions";
import Table from "@/components/Table";
import { IconCircleArrowUp, IconCircleArrowDown, IconBrandCashapp } from "@tabler/icons-react";
import { useState } from "react";


export default function Home() {

  const [description, setDescription] = useState<string>("")
  const [value, setValue] = useState<number> (0)
  const [operations, setOperations] = useState<any[]>([])
  const [selectedOption, setSelectedOption] = useState<string>("deposit")
  const [typeOfDeposit, setTypeOfDeposit] = useState<boolean>(false) 
  const [valueColor, setValueColor] = useState<string>("black")
  const [sign, setSign] = useState<string>("")
  const [totalDepositValue, setTotalDepositValue] = useState<number>(0)
  const [totalOutputValue, setTotalOutPutValue] = useState<number>(0)
  const [difference, setDifference] = useState<number>(0)


  const addNewOperation = () => {
    
    if (description.length <= 0 || value <= 0) {
      alert("Por favor verifique os dados informados e tente novamente.")
      return
    }
    
    const newValueColor = selectedOption === "deposit" ? "green" : "red";
    const newSign = selectedOption === "deposit" ? "+" : "-";
    
    setOperations((prevOperations) => [
      {
        id: Math.floor(Math.random() * 1000000),
        description: description,
        value: Number(value),
        valueColor: newValueColor,
        sign: newSign
      },
      ...prevOperations
    ])

    const differenceTotal = totalDepositValue - totalOutputValue;
    const sign = difference >= 0 ? "+" : "-";
    setDifference((prev) => prev + differenceTotal)

    if (newValueColor === "green") {
      setTotalDepositValue((prev) => prev + value);
    } else if (newValueColor === "red") {
      setTotalOutPutValue((prev) => prev + value);
    }

    setDescription("")
    setValue(0)
  }


  const removeOperation = (operationID: number) => {
    setOperations(operations.filter((operation) => operation.id !== operationID ))
  }


  const editOperation = () => {
    return alert("Cliquei em editar")
  }

  const calculateTotalValue = (color: string) => {
    const filteredOperations = operations.filter(operation => operation.valueColor === color);
    const totalValue = Number(filteredOperations.reduce((current: number, operation: any) => current + operation.value, 0));
    return totalValue;
    
  };



  return (
    <main className="flex min-h-screen w-screen max-w-full items-center justify-center bg-gray-500">
      
      <div className="flex flex-col gap-7 max-w-7xl w-full h-full px-2 my-[50px]">

        <div className="flex flex-wrap gap-5">
          <Cards text="Entradas" icon={<IconCircleArrowUp/>} sign="+" totalValue={calculateTotalValue("green")}/>
          <Cards text="Saídas" icon={<IconCircleArrowDown/>} sign="-" totalValue={calculateTotalValue("red")}/>
          <Cards text="Total" icon={<IconBrandCashapp/>} totalValue={difference}/>
        </div>

        <div>
          <Descriptions 
            description={description} 
            setDescription={setDescription} 
            value={value} 
            setValue={setValue} 
            clickButton={addNewOperation} 
            selectedOption={selectedOption} 
            setSelectedOption={setSelectedOption} 
          />
        </div>

        <div className="table">
          <Table 
            remove={removeOperation} 
            edit={editOperation} 
            operations={operations} 
            valueColor={valueColor} 
            sign={sign}
          />
        </div>
          
      </div>
    </main>
  )
}
