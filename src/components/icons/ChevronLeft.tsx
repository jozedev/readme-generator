type Props = {
    className?: string
}

export function ChevronLeft({ className }: Props) {
    return (
        <svg 
            className={className}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
    );
}