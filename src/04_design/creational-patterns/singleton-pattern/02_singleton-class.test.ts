import Singleton from './02_singleton-class';

describe('Singleton Pattern', () => {
    it('should create only one instance', () => {
        const s1 = Singleton.getInstance();
        const s2 = Singleton.getInstance();
    
        expect(s1).toBe(s2);
    });

    it('should have some business logic', () => {
        const s1 = Singleton.getInstance();
        const s2 = Singleton.getInstance();

        s1.someBusinessLogic();

        expect(s1).toBe(s2);
    });

    it('should have a private constructor', () => {
        // @ts-expect-error
        const s1 = new Singleton();
    });

    it('should have a private instance', () => {
        // @ts-expect-error
        const s1 = new Singleton();
    }); 
})