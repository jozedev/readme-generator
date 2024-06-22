import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';

interface Props {
    backgroundColor: string;
    mainColor: string;
    innerClassName?: string;
    outerClassName?: string;
    children?: React.ReactNode;
    attributes?: HTMLAttributes<HTMLDivElement>
}

export const Div = forwardRef(({ outerClassName, innerClassName, backgroundColor, mainColor, children, attributes }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className={`rounded-lg bg-${backgroundColor} ${outerClassName}`} {...attributes}>
            <div className={`block rounded-lg border-2 border-black -translate-x-2 -translate-y-2 px-6 py-4 text-black bg-${mainColor} ${innerClassName}`}>
                {children}
            </div>
        </div>
    );
})
