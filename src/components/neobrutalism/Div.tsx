import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';

interface Props {
    innerClassName?: string;
    outerClassName?: string;
    children?: React.ReactNode;
    attributes?: HTMLAttributes<HTMLDivElement>
}

export const Div = forwardRef(({ outerClassName, innerClassName, children, attributes }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className={`rounded-lg ${outerClassName}`} {...attributes}>
            <div className={`block rounded-lg border-2 border-black -translate-x-2 -translate-y-2 px-6 py-4 text-black ${innerClassName}`}>
                {children}
            </div>
        </div>
    );
})
