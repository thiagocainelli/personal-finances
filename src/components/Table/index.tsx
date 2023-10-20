import { IconEdit, IconTrash } from "@tabler/icons-react";
import "./Table.css";

interface TableTypes {
    operations: any,
    remove: any,
    edit: any,
    valueColor: string
    sign: string
}

export default function Table ({operations, remove, edit, valueColor, sign}: TableTypes) {
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
                        {operations.map((operation: any) => (
                            <tr key={operation.id}>
                                <td>{operation.description}</td>
                                <td className={`text-${operation.valueColor}-600`}>{operation.sign} R$ {operation.value}</td>
                                <td className="w-[15%]">
                                    <div className="flex items-center justify-center gap-2">
                                        <button onClick={edit}>
                                            <IconEdit width={30} height={30} color="blue" />
                                        </button>
                                        <button onClick={() => remove(operation.id)}>
                                            <IconTrash width={30} height={30} color="red" />
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