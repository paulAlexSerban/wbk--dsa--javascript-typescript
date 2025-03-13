(() => {
    const storage: ShipStorage = {
        max: undefined,
        items: [],
    };
    Object.defineProperty(storage, 'max', { writable: false, value: 5000 });
    let currentStorage: number;
    function storageUsed() {
        if (currentStorage) {
            return currentStorage;
        }
        currentStorage = 0;
        for (let i = 0; i < storage.items.length; i++) {
            // OK!
            currentStorage += storage.items[i].weight;
        }
        return currentStorage;
    }

    function add(item: StorageItem) {
        if (storage.max) {
            if (storage.max - item.weight >= storageUsed()) {
                storage.items.push(item);
                currentStorage += item.weight;
            }
        }
    }
    add({ weight: 3000 });
})();
