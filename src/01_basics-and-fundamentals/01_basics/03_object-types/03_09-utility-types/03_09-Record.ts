(() => {
    /**
     * Record<Type, Keys>
     * Constructs an object type whose property keys are Keys and whose property values are Type.
     */

    interface CatInfo {
        age: number;
        breed: string;
    }

    // CatName is a string literal type that can only be one of the three strings
    type CatName = 'miffy' | 'boris' | 'mordred';

    // Record<K, T> - to be used with object collections
    // keys of the object are of type K (CatName) and values are of type T (CatInfo)
    const cats: Record<CatName, CatInfo> = {
        miffy: { age: 10, breed: 'Persian' },
        boris: { age: 5, breed: 'Maine Coon' },
        mordred: { age: 16, breed: 'British Shorthair' },
    };

    console.log(cats);
})();
