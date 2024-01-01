import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import {ButtonHTMLAttributes, HTMLAttributes, memo, ReactNode} from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement>  {
    className?: string;
    children: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.Card, {}, [className])}
             {...otherProps}
        >
            {children}
        </div>
    );
});