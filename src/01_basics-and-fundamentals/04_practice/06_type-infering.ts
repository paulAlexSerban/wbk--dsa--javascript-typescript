(() => {
    /**
     * Type Inferring
     *
     * Type inferring can be done using conditional types and infer keyword to extract types.
     * This can be useful when you want to extract the type of a function's return value or parameters.
     */
  
    type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
    const getUser = () => ({ id: 1, name: "John", email: "john@example.com" });
  
    type UserType = ReturnType<typeof getUser>;
  
    // UserType is now inferred as:
    // {
    //   id: number;
    //   name: string;
    //   email: string;
    // }
  
    class Account {
      user: UserType;
  
      constructor(user: UserType) {
        this.user = user;
      }
    }
  
      const account = new Account(getUser());
      console.log(account.user.id); // Output: 1
  })();