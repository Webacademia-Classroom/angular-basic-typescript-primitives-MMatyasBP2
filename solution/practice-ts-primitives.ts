export default class calculator {
    // Example for defining a variable based on the comment.
    /** @type {boolean} active - value: false */
    active: boolean = false;

    // Define the following variable based on the comments, with the appropriate type-annotation!
    /** 
     * @type {number} members - value: 11
     */
    members: number = 11;

    /** 
     * @type {number} baseColor - value: a3f4d5 (hexadecimal number)
     */
    baseColor: number = 0xa3f4d5;

    /** 
     * @type {number} role - value: 1001 (binary number)
    */
    role: number = 0b1001;

    /** 
     * @type {number} systemID - value: 7700 (octal number)
    */
    systemID: number = 0o7700;

    /** 
     * @type {number} average - value: 4.5
    */
    average: number = 4.5;

    /** 
     * @type {string} adminName - value: any text 
    */
    adminName: string = 'Matyi';

    /** 
     * @type {string} sumPoints - value: 'Members have <this.members multiply by this.average> points' (template string) 
    */
    sumPoints: string = `Members have ${this.members * this.average} points`;

}
