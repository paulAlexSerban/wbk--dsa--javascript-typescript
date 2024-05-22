import closure from './06_01-createClosure';

describe('closure', () => {
    it('should return "Closure accessing largeObject"', () => {
        expect(closure()()).toBe('Closure accessing largeObject');
    });
});

describe('Memory Leak Detection', () => {
    it('should not leak memory', async () => {
        if (typeof global.gc === 'function') {
            global.gc(); // Force garbage collection
        } else {
            console.log('Garbage collection is not exposed. Start Node.js with --expose-gc flag.');
        }
        const usedMemoryBefore = process.memoryUsage().heapUsed;

        // Perform the operation that might cause a memory leak
        closure();

        // Check and call gc again before measuring
        if (typeof global.gc === 'function') {
            global.gc(); // Force garbage collection again to clean up before measuring
        }
        const usedMemoryAfter = process.memoryUsage().heapUsed;

        // Allow for some memory usage growth that's not a leak, e.g., due to V8 internals
        const allowedGrowth = 1024 * 1024 * 10; // 10MB
        // console.log({
        //     usedMemoryBefore,
        //     usedMemoryAfter,
        //     allowedGrowth,
        // })
        const memoryGrowth = usedMemoryAfter - usedMemoryBefore;
        // console.log(`Memory growth in Kb: ${memoryGrowth / 1024}Kb`);
        expect(memoryGrowth).toBeLessThan(allowedGrowth);
    });
});
