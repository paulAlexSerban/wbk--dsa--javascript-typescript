/**
 *
 * Type Mapping
 * Type mapping allows you to create new types based on existing ones by transforming each property.
 * This is typically done using TypeScript's mapped types.
 */

(() => {
  type User = {
    id: number;
    name: string;
    email: string;
  };

  /////////////////////
  // BASIC TYPE MAPPING
  // Given a type alias User, we can create a new type where all properties are optional:
  /////////////////////


  // You can create a mapped type that transforms all properties to be optional:
  type OptionalUser = {
    [P in keyof User]?: User[P];
  };

  // OptionalUser is now equivalent to:
  // {
  //   id?: number;
  //   name?: string;
  //   email?: string;
  // }

  class Account {
    user: OptionalUser;

    constructor(user: OptionalUser) {
      this.user = user;
    }
  }

  const account = new Account({ id: 1 });
  console.log(account.user.id); // Output: 1

  /////////////////////
  // READONLY PROPERTIES
  // You can use type mapping to make all properties of a type readonly:
  /////////////////////

  type ReadonlyUser = {
    readonly [P in keyof User]: User[P];
  };

  // ReadonlyUser is equivalent to:
  // {
  //   readonly id: number;
  //   readonly name: string;
  //   readonly email: string;
  // }

  const user: ReadonlyUser = { id: 1, name: "John", email: "john@doe.com" };
  console.log(user.id); // Output: 1

  /////////////////////
  // NULLABLE PROPERTIES
  // Making all properties of a type nullable can be done through type mapping:
  /////////////////////

  type NullableUser = {
    [P in keyof User]: User[P] | null;
  };
  
  // NullableUser is equivalent to:
  // {
  //   id: number | null;
  //   name: string | null;
  //   email: string | null;
  // }

  const user2: NullableUser = { id: null, name: "John", email: null };
  console.log(user2.id); // Output: null

  /////////////////////
  // TYPE MAPPING and TRANSFORMATIONS
  // You can transform the types of properties, such as converting all properties to a specific type:
  /////////////////////

  type StringifiedUser = {
    [P in keyof User]: string;
  };
  
  // StringifiedUser is equivalent to:
  // {
  //   id: string;
  //   name: string;
  //   email: string;
  // }

  const user3: StringifiedUser = { id: "1", name: "John", email: "john@doe.test" };
  console.log(user3.id); // Output: "1"

  /////////////////////
  // MAPPING and INFERING TYPES
  // You can create types that infer the types of properties:
  /////////////////////

  type ApiResponse<T> = {
    data: T;
    error: string | null;
  };
  
  type UserResponse = ApiResponse<User>;
  
  // UserResponse is equivalent to:
  // {
  //   data: User;
  //   error: string | null;
  // }

  const response: UserResponse = {
    data: { id: 1, name: "John", email: "john@doe.test" },
    error: null,
  };

  console.log(response.data.id); // Output: 1

  /////////////////////
  // COMBINING TYPE MAPPING TECHNIQUES
  // You can combine multiple type mapping techniques to create more complex types:
  /////////////////////

  type MutableNullableUser = {
    -readonly [P in keyof NullableUser]-?: NullableUser[P];
  };
  
  // MutableNullableUser is equivalent to:
  // {
  //   id: number | null;
  //   name: string | null;
  //   email: string | null;
  // }

  const user4: MutableNullableUser = { id: 1, name: null, email: "john@doe.com" };
  console.log(user4.id); // Output: 1
  
  // NOTE: the - operator before readonly and ? in mapped types is used to remove the readonly or optional modifier from the properties of the type
  // -readonly: Removes the readonly modifier from each property.
  // -?: Removes the optional modifier from each property.
})();
