(() => {
    /**
     * Exclude<Type, ExcludedUnion>
     */

    type Permissions = 'READ' | 'WRITE' | 'DELETE';

    // exclude WRITE and DELETE from Permissions
    type ReadOnlyPermissions = Exclude<Permissions, 'WRITE' | 'DELETE'>;

    const readOnlyPermissions: ReadOnlyPermissions = 'READ';

    console.log(readOnlyPermissions);
})();
