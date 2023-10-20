"use client"

import Cards from "@/components/Cards";
import Descriptions from "@/components/Descriptions";
import Table from "@/components/Table";
import { IconCircleArrowUp, IconCircleArrowDown, IconBrandCashapp } from "@tabler/icons-react";
import { useState } from "react";


export default function Home() {

  const [description, setDescription] = useState<string>("")
  const [value, setValue] = useState<number>(0)
  const [operations, setOperations] = useState<any[]>([])
  const [selectedOption, setSelectedOption] = useState<string>("deposit")
  const [typeOfDeposit, setTypeOfDeposit] = useState<boolean>(false) // true = + // false = -
  const [valueColor, setValueColor] = useState<string>("black")
  const [sign, setSign] = useState<string>("")

  const addNewOperation = () => {
    
    if (description.length <= 0 || value <= 0) {
      alert("Por favor verifique os dados informados e tente novamente.")
      return
    }
    
    let newValueColor = selectedOption === "deposit" ? "green" : "red";
    let newSign = selectedOption === "deposit" ? "+" : "-"
    
    setOperations([
      {
        id: Math.floor(Math.random() * 1000000),
        description: description,
        value: value,
        valueColor: newValueColor,
        sign: newSign
      },
      ...operations
    ])

    setDescription("")
    setValue(0)
  }


  const removeOperation = (operationID: number) => {
    setOperations(operations.filter((operation) => operation.id !== operationID ))
  }


  const editOperation = () => {
    return alert("Cliquei em editar")
  }

  return (
    <main className="flex min-h-screen w-screen max-w-full items-center justify-center bg-gray-500">
      
      <div className="flex flex-col gap-7 max-w-7xl w-full h-full px-2 my-[50px]">

        <div className="flex flex-wrap gap-5">
          <Cards text="Entradas" icon={<IconCircleArrowUp/>} sign="+" value={0}/>
          <Cards text="Saídas" icon={<IconCircleArrowDown/>} sign="-" value={0}/>
          <Cards text="Total" icon={<IconBrandCashapp/>} value={0}/>
        </div>

        <div>
          <Descriptions description={description} setDescription={setDescription} value={value} setValue={setValue} clickButton={addNewOperation} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </div>

        <div className="table">
          <Table remove={removeOperation} edit={editOperation} operations={operations} valueColor={valueColor} sign={sign}/>
        </div>
          
      </div>
    </main>
  )
}
