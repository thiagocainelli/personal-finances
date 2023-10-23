interface CardsType {
    text: string,
    sign?: string,
    icon: any,
    totalValue?: number,
}

export default function Cards ({text, icon, totalValue, sign}: CardsType) {
    
    const formatedValue = Number(totalValue).toFixed(2)
    
    return (
        <>
            <div className="flex flex-col gap-5 grow min-w-[320px] rounded-md bg-white text-gray-900 py-2 px-3">
                <p className="flex w-full justify-between px-5 items-center text-2xl">{text}{icon}</p>
                <p className="text-3xl font-bold text-center">{sign} R$ {formatedValue}</p>
            </div>
        </>
    )
}