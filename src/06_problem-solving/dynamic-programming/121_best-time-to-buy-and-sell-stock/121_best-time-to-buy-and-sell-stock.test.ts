import maxProfit from './121_best-time-to-buy-and-sell-stock';

describe('should return the maximum profit you can achieve from this transaction', () => {
  it('should return 5', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('should return 0', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});