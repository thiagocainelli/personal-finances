interface InputsTypes {
    description: string,
    setDescription: (ev:any) => void,
    value: number,
    setValue: (ev: any) => void,
    clickButton: any
}

export default function Descriptions ({description, setDescription, value, setValue, clickButton}: InputsTypes) {  
    return (
        <>
            <div className="flex flex-col gap-3 items-center justify-between md:flex-row px-5 py-3 text-gray-900 bg-white rounded-md">
                <div>
                    <p>Descrição</p>
                    <input
                        className="border border-gray-900 rounded-md outline-none px-2" 
                        type="text"
                        value={description}
                        onChange={(ev) => setDescription(ev.target.value)}
                    />
                </div>

                <div>
                    <p>Valor</p>
                    <input
                        className="border border-gray-900 rounded-md outline-none px-2" 
                        type="number"
                        value={value}
                        onChange={(ev) => setValue(ev.target.value)}
                    />
                </div>

                <div className="flex items-center gap-3">
                    <div>
                        <input
                            type="radio"
                            name="transition"
                            id="depositMoney"
                        />
                        <label className="ms-1" htmlFor="depositMoney">Entrada</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="transition"
                            id="outMoney"
                        />
                        <label className="ms-1" htmlFor="outMoney">Saida</label>
                    </div>
                </div>

                <div>
                    <button className="bg-green-600 px-3 py-2 rounded-md text-white hover:bg-green-800 active:opacity-50" onClick={clickButton}>Adicionar</button>
                </div>

            </div>
        </>
    )
}