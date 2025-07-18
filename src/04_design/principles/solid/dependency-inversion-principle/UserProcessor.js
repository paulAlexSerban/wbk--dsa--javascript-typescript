// Abstraction (Interface)
class UserRepository {
    getUser() {
        throw new Error("Method 'getUser()' must be implemented.");
    }
}

// High-level module
class UserProcessor {
    constructor(userRepository) {
        if (!(userRepository instanceof UserRepository)) {
            throw new Error('Invalid repository type');
        }
        this.userRepository = userRepository;
    }

    processUser(userId) {
        const user = this.userRepository.getUser(userId);
        // Process the user...
        console.log(`Processing user: ${user.name}`);
    }
}

// Low-level module
class SQLUserRepository extends UserRepository {
    getUser(userId) {
        // Logic to get user from SQL database
        return { id: userId, name: 'Alice' };
    }
}

// Low-level module
class APIUserRepository extends UserRepository {
    getUser(userId) {
        // Logic to get user from an external API
        return { id: userId, name: 'Bob' };
    }
}

// Client code
const sqlRepo = new SQLUserRepository();
const apiRepo = new APIUserRepository();

const userProcessor1 = new UserProcessor(sqlRepo);
userProcessor1.processUser(1); // Output: Processing user: Alice

const userProcessor2 = new UserProcessor(apiRepo);
userProcessor2.processUser(2); // Output: Processing user: Bob

/**
 * In this example, UserProcessor is a high-level module, and it depends on the abstract UserRepository rather than the concrete implementations (SQLUserRepository or APIUserRepository). This way, you can easily switch between different user repositories without changing the UserProcessor code. The UserRepository acts as an interface (abstraction) that decouples the high-level and low-level modules.
 */
