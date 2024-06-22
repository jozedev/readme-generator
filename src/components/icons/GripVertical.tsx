type Props = {
    className?: string;
}

export function GripVertical({ className }: Props) {
    return (
        <svg 
            className={className} 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="5" r="1" />  <circle cx="9" cy="12" r="1" />  <circle cx="9" cy="19" r="1" />  <circle cx="15" cy="5" r="1" />  <circle cx="15" cy="12" r="1" />  <circle cx="15" cy="19" r="1" /></svg>
    )
}