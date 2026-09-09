import { describe, test, mock } from 'node:test';
import assert from 'node:assert/strict';
import { processOrder } from './app.js';

describe("order future ", () => {
    test("that it process the order correctly ", () => {
        //AAA

        console.log("  i am mocked ......")
        const mockedProcessOrder = mock.fn((amount) => {
            return { id: 123, amount: amount }
        })




        const expected = { id: 123, amount: 100}

        const result = processOrder({amount: 100});

        assert.deepStrictEqual(result, expected);
        assert.strictEqual(mockedProcessOrder.mock[0]);


        const call = mockedProcessPayment.mock.calls[0];

        assert.strictEqual(call.arguments,[100]);



    });
});