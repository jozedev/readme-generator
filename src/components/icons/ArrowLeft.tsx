type Props = {
    className?: string;
}

export function ArrowLeft({ className }: Props) {
    return (
        <svg 
            className={className} 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="11" y2="18" />  <line x1="5" y1="12" x2="11" y2="6" /></svg>
    )
}