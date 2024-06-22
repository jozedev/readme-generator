type Props = {
    className?: string;
}

export function ChevronUp({ className }: Props) {
    return (
        <svg 
            className={className}  
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 15 12 9 18 15" /></svg>
    )
}