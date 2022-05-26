import { countPercent } from 'utils';

describe('test utils', () => {
  it('countPercent tests', () => {
    const total = 120;
    const amount = 75;
    const result = '63%';
    expect(countPercent({ total, amount })).toBe(result);
  });
});
