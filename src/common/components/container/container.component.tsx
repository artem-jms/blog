import React, {FC, PropsWithChildren} from 'react';

interface ContainerProps {
    className?: string
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, className }) => {
    return (
        <div className={`max-w-screen-xl mx-auto ${className&&className}`}>
            {children}
        </div>
    );
};

