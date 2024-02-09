import processData from './06_02-processData';

describe('processData', () => {
    it('should return a copy of largeArray', () => {
        const getData = processData();
        expect(getData()).toHaveLength(1000000);
    });

  });
