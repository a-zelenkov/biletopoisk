'use client';

import { useEffect, useState } from 'react';
import style from './style.module.css';
import classNames from 'classnames';

interface Props {
    className?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export function Input({ className, label, placeholder, value: initialValue, onChange }: Props) {
    const [value, setValue] = useState(initialValue || '');

    useEffect(() => {
        onChange?.(value);
    }, [onChange, value]);

    return (
        <div className={classNames(className, style.input)}>
            <label>{label}</label>
            <input
                value={value}
                placeholder={placeholder}
                onChange={e => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
}
