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
                        <th>Ação</th>
                    </tr>
               </thead>

               <tbody>
                    {operations.map((operation: any) => (
                        <tr key={operation.id}>
                            <td>{operation.description}</td>
                            <td>{operation.value}</td>
                            <td>
                                <button onClick={() => remove(operation.id)}>Icone Lixeira</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}