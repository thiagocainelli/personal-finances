import { IconTrash } from "@tabler/icons-react";
import "./Table.css";

interface TableTypes {
    operations: any,
    remove: any,
    
}

export default function Table ({operations, remove}: TableTypes) {
    
    return (
        <>
            <table className="w-full rounded-md">
               <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        
                    </tr>
               </thead>

               <tbody>
                    {operations && operations.map((operation: any) => (
                        <tr key={operation.id}>
                            <td>{operation.description}</td>
                            <td className={operation.valueColor === "green" ? "text-green-600" : "text-red-600"}>
                                {operation.valueColor === "green" ? "+" : "-"} R$ {operation.value.toFixed(2)}
                            </td>
                            <td className="w-[15%]">
                                <div className="w-full flex items-center justify-center">
                                    <button onClick={() => remove(operation.id)}>
                                        <IconTrash color="red" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}