//use the functions from sample.js
const {addFunc, isDivisibleBy5, checkOddEven} = require ("./sample");

//create the test suite
describe("Test Suite for sample.js functions", () => {
    //write the test
    it("should add 3 numbers", () => {
        const result = addFunc(1,3,4);
        // compare the result to an expected value
        expect(result).toBe(8);
    })

    //Activity: write a test that tests the functionality of isDivisibleBy5 and make it pass

    it("should check for divisibility by 5", () => {
        const result = isDivisibleBy5(100);
        // compare the result to an expected value
        expect(result).toBe(true);
    })

    //Test Driven Development
    //Step 1: Write the test and it will fail cause function not defined
    it("should check if odd or even", () => {
        const result = checkOddEven(1999);
        expect(result).toBe("odd");
    })
    //Step 2: Defined the function in sample.js
})

