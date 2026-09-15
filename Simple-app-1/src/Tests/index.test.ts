import {describe,expect,it} from "@jest/globals"
import sum, { multiply } from "../index.js";


describe("testing fo sum function ",()=>{
    it("should be it correct ",()=>{
        const finaleAnwser=sum(1,2);

        expect(finaleAnwser).toBe(3);
    });

    
})

describe("testing for multiple function ",()=>{
    it("should it be correct ",()=>{
        const finaleAnwser = multiply(2,3);

        expect(finaleAnwser).toBe(6);
    })
})