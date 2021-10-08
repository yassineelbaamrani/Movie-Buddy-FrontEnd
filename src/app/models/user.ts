/**
 * Why did we use Classes and not interfaces in Typescript?
 */
export class User {

    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    addresses: any[];

    constructor(id: number, firstName: string, lastName: string, username: string, password: string, email: string, addresses:any[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.addresses = addresses;
    }
}

export class Address {

    street: string;
    secondary: string;
    state: string;
    city: string;

    constructor(street: string, secondary: string, state: string, city: string) {
        this.street = street;
        this.secondary = secondary;
        this.state = state;
        this.city = city;
    }
}