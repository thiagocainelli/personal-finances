interface CardsType {
    text: string,
    sign?: string,
    icon: any,
    value: number
}

export default function Cards ({text, icon, value, sign}: CardsType) {
    return (
        <>
            <div className="flex flex-col gap-5 grow min-w-[320px] rounded-md bg-white text-gray-900 py-2 px-3">
                <p className="flex w-full justify-between px-5 items-center text-2xl">{text}{icon}</p>
                <p className="text-2xl font-bold text-center">{sign} R$ {value}</p>
            </div>
        </>
    )
}