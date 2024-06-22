type Props = {
    className?: string
}

export function Circle({ className }: Props) {
    return (
        <svg className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /></svg>
    )
}