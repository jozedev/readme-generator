export interface Props {
    className?: string
}

export function Grid ({ className }: Props) {
    return (
        <svg className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />  <rect x="14" y="14" width="7" height="7" />  <rect x="3" y="14" width="7" height="7" /></svg>
    )
}