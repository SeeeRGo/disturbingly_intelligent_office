import React, { useMemo } from 'react';
import { countPercent } from 'utils';

interface ICustomTooltip {
    name: string,
    total: number,
    amount: number,
}

export const CustomTooltip = ({
    name,
    total,
    amount,
}: ICustomTooltip) => {

    const percent = useMemo(() => countPercent({ total, amount }), [total, amount])

    return (
        <div className='tooltip-root'>
            <span className='tooltip-title'>{name}</span>
            <span className='tooltip-amount'>Total: {total}</span>
            <span className='tooltip-amount'>Amount: {amount}</span>
            <span className='tooltip-percent'>Percent: {percent}</span>
        </div>
    );
};
