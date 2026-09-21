// Hooks - A special methods which perform a setup and tear down process

// test.beforeAll(){...} - It will be execute before running any of the test case
// test.beforeEach(){...} - It will run once before running each and every test case
// pre-condition/ common steps inside each test case

// test(){...}

// test.afterEach(){...} - It will run once before running each and every test case - close the browser
// test.afterAll(){...} - It will be execute after running all of the test case


import {test} from '@playwright/test'

test.beforeEach(async ()=>{
    console.log("Before Each");
})

test.beforeAll(async ()=>{
    console.log("Before All");
})

test.afterEach(async ()=>{
    console.log("After Each");
})

test.afterAll(async ()=>{
    console.log("After All");
})

test("Test1", async ()=>{
    console.log("Test1");
})

test("Test2", async ()=>{
    console.log("Test2");
})

test("Test3", async ()=>{
    console.log("Test3");
})