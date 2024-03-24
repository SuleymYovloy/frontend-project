import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * @deprecated
 * Устарел, используем новые компоненты из папки redesigned
 * */
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-facebook', {}, [className])}>
        <div />
        <div />
        <div />
    </div>
);
