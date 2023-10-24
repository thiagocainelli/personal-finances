"use client"

import Cards from "@/components/Cards";
import Descriptions from "@/components/Descriptions";
import Table from "@/components/Table";
import { IconCircleArrowUp, IconCircleArrowDown, IconCash } from "@tabler/icons-react";
import { useState } from "react";
import './styles/Home.css'


export default function Home() {

  const [description, setDescription] = useState<string>("")
  const [value, setValue] = useState<number>(0)
  const [operations, setOperations] = useState<any[]>([])
  const [selectedOption, setSelectedOption] = useState<string>("deposit")
  const [totalDepositValue, setTotalDepositValue] = useState<number>(0)
  const [totalOutputValue, setTotalOutPutValue] = useState<number>(0)
  const [difference, setDifference] = useState<number>(totalDepositValue - totalOutputValue);


  // Função para adicionar uma nova operação
  const addNewOperation = () => {
    
    if (description.length <= 0 || value <= 0) {
      alert("Por favor verifique os dados informados e tente novamente.")
      return;
    }
    
    const newValueColor = selectedOption === "deposit" ? "green" : "red";
    const newSign = selectedOption === "deposit" ? "+" : "-";
    const newValue = Number(value);
    
    const newOperation = {
      id: Math.floor(Math.random() * 1000000),
      description: description,
      value: newValue,
      valueColor: newValueColor,
      sign: newSign
    };
  
    setOperations((prevOperations) => [newOperation, ...prevOperations])

    if (newValueColor === "green") {
      setTotalDepositValue((prev: number) => prev + newValue);

    } else if (newValueColor === "red") {
      setTotalOutPutValue((prev: number) => prev + newValue);
      
    }

    setDifference((prev) => prev + (newValueColor === "green" ? newValue : -newValue));
    setDescription("")
    setValue(0)

  }

  // Função para remover uma operação específica
  const removeOperation = (operationID: number) => {
    const removedOperation = operations.find(operation => operation.id === operationID);
    
    if (removedOperation) {
      const removedValue = removedOperation.value;
      const removedColor = removedOperation.valueColor;
      
      if (operations) {
        setOperations(prevOperations => prevOperations.filter(operation => operation.id !== operationID));
      }
      
      if (removedColor === 'green') {
        setTotalDepositValue(prev => prev - removedValue);
      } else if (removedColor === 'red') {
        setTotalOutPutValue(prev => prev - removedValue);
      }
      
      setDifference(prevDifference => prevDifference - (removedColor === 'green' ? removedValue : -removedValue));
    }

  }

  // Função para calcular o valor total tanto de entradas quanto de saídas
  const calculateTotalValue = (color: string) => {
    if (operations) {
      const filteredOperations = operations.filter(operation => operation.valueColor === color);
      const totalValue = Number(filteredOperations.reduce((current: number, operation: any) => current + operation.value, 0));
      return totalValue;
    } else {
      return 0; 
    }
  };


  return (
    <main className="background flex min-h-screen w-screen max-w-full items-center justify-center">
      
      <div className="flex flex-col gap-7 max-w-7xl w-full h-full px-2 my-[30px]">
        
        <h1 className="text-white text-6xl text-center mt-[-20px] mb-5">Controle Financeiro</h1>

        <div className="flex flex-wrap gap-5">
          <Cards text="Entradas" icon={<IconCircleArrowUp color="green"/>} sign="+" totalValue={calculateTotalValue("green")}/>
          <Cards text="Saídas" icon={<IconCircleArrowDown color="red"/>} sign="-" totalValue={calculateTotalValue("red")}/>
          <Cards text="Total" icon={<IconCash/>} sign={difference >= 0 ? "+" : "-"} totalValue={difference}/>
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
            operations={operations} 
          />

        </div>
          
      </div>
    </main>
  )
}
