import Cards from "@/components/Cards";
import Descriptions from "@/components/Descriptions";
import { IconCircleArrowUp, IconCircleArrowDown, IconBrandCashapp } from "@tabler/icons-react";



export default function Home() {

  const []

  const addOnList = () => {
    console.log("Cliquei no botão!")
  }

  return (
    <main className="flex min-h-screen w-screen max-w-full items-center justify-center bg-gray-500">
      
      <div className="flex flex-col gap-10 max-w-7xl w-full bg-yellow-500 px-2">

        <div className="flex flex-wrap gap-5 bg-blue-500">
          <Cards text="Entradas" icon={<IconCircleArrowUp/>} value={0}/>
          <Cards text="Saídas" icon={<IconCircleArrowDown/>} value={0}/>
          <Cards text="Total" icon={<IconBrandCashapp/>} value={0}/>
        </div>

        <div className="inputs">
          <Descriptions />
        </div>

        <div className="table">


        </div>
          
      </div>
    </main>
  )
}
