import { test, suite } from "node:test";
import assert from "node:assert";

import { greet, greetInRussian } from "./app.js";

suite("greet function tests  ", () => {
    const expected = 'Hello, World!';
    const actual = greet('World');


    assert.strictEqual(actual, expected);

}

)

test("greet function returns correct greeting in russian ", () => {
    //AAA 

    //Arrenge
    //Act
    //Assert

    const expected = 'Привет, мир!';
    const actual = greetInRussian('мир');


    assert.strictEqual(actual, expected);

}
)