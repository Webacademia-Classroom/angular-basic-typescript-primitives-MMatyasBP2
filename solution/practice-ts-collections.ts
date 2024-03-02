export default class calculator {
    // Example for defining an Array of Objects.
    bills: {id: number}[] = [
        {id: 1},
        {id: 2},
    ];

    // Define the following variable based on the comments, with the appropriate type-annotation!
    /** 
     * @type {Array} points - Array of numbers, from 1 to 10, step size is 1
    */
   points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /** 
     * Each Array elements will be an Object, that is a user.
     * Mandatory items of the users: name<string>, email<string>.
     * Initialize the Array, it will has minimum 2 elements.
     * @type {Array} users - Array of Users.
     */
    users: {name: string, email: string}[] = [
        {name: 'Matyi', email: 'matyi@gmail.com'},
        {name: 'Esztó', email: 'eszto@gmail.com'}
    ];
    
    /** 
     * Each Array elements will be an Object, that is a product.
     * Mandatory items of the products: name<string>, price<number>, stock<number>.
     * Optional items: active<boolean>.
     * Initialize the Array, it will has minimum 2 elements.
     * @type {Array} products - Array of Products.
     */
    products: {name: string, price: number, stock: number, active?: boolean}[] = [
        {name: 'DriveUnit', price: 250, stock: 2000},
        {name: 'Battery', price: 500, stock: 10000, active: true}
    ];
    
    /** 
     * Initialize a Tuple, with the following types. The values are not relevant.
     * @type {Tuple} role - number, string, boolean. 
     */
    role: [number, string, boolean] = [1, 'Helló Világ!', true];
}
