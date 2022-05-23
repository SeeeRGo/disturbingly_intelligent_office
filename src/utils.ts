import { IAdaptItem, ICountPercent } from "types";

export const countPercent = ({
    total,
    amount
}: ICountPercent) => {
    return `${Math.round((100 * amount) / total)}%`;
}


export const adaptItem = (value: IAdaptItem[]) => {
    const adaptValue = value[0];
    const id = adaptValue?.id || 0;
    const name = adaptValue?.name || '';
    const totalValue = adaptValue?.capacity || 0;
    const partialValue = adaptValue?.weight || 0;
    return { id, name, totalValue, partialValue }
}