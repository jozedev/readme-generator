type Props = {
    className?: string;
}

export function ChevronDown({ className }: Props) {
    return (
        <svg 
            className={className} 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" /></svg>
    )
}