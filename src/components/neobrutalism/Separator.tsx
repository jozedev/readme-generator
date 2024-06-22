interface Props {
    className?: string
}

export function Separator({ className }: Props) {
    return (
        <div className={`w-full border border-black my-2 ${className}`}>

        </div>
    );
}