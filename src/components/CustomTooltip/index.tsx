import React from 'react';

interface ICustomTooltip {
    name: string,
    amount: number,
    percent: string
}

export const CustomTooltip = ({
    name,
    amount,
    percent
}: ICustomTooltip) => {

    return (
        <div className='tooltip-root'>
            <span className='tooltip-title '>{name}</span>
            <span className='tooltip-amount'>Amount: {amount}</span>
            <span className='tooltip-percent'>Percent: {percent}</span>
        </div>
    );
};
