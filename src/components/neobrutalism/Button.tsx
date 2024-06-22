interface Props {
    backgroundColor: string;
    mainColor: string;
    innerClassName?: string;
    outerClassName?: string;
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
    active?: boolean
    children?: React.ReactNode;
}

export function Button({ backgroundColor, mainColor, innerClassName, outerClassName, onClick, active, children }: Props) {
    return (
        <span className={`rounded-md bg-${backgroundColor} ${outerClassName}`}>
            <button className={`block w-full ${active ? '' : '-translate-x-2 -translate-y-2 hover:-translate-y-3'} rounded-md border-2 border-black bg-${mainColor} 
            font-semibold text-lg py-1 px-4 active:translate-x-0 active:translate-y-0
            current:translate-x-0 current:translate-y-0 transition-all bg-${mainColor} ${innerClassName}`} onClick={onClick}> {children} </button>
        </span>
    )
}