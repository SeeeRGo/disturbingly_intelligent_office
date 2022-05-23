import { IAdaptItem } from 'types';
import { countPercent, adaptItem } from 'utils';

describe('test utils', () => {
  it('countPercent tests', () => {
    const total = 120;
    const amount = 75;
    const result = '63%';
    expect(countPercent({ total, amount })).toBe(result);
  });
  it('adaptItem tests', () => {
    const mockValue = [{
      id: '1',
      storageType: 0,
      capacity: 1000,
      weight: 750,
      name: 'Snacks'
    }] as IAdaptItem[];
    const result = { id: '1', name: 'Snacks', totalValue: 1000, partialValue: 750 }
    expect(adaptItem(mockValue)).toStrictEqual(result);
  });
});
