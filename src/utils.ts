import { ICountPercent } from "types";

export const countPercent = ({
    total,
    amount
}: ICountPercent) => {
    return `${Math.round((100 * amount) / total)}%`;
}