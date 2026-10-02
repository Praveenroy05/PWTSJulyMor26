// API - Application Programming Interface

// Frontend - JS/TS/Angular/React/Vue/Ajax
// Backend  - Java/Python/Php
// Database - Sql/Mysql/PostgreS

// API - Independent of any PL

// GET
// POST
// PUT
// DELETE
// PATCH


// 1. Reuqest Format

/*
URL - https://rahulshettyacademy.com/api/ecom/auth/login
HTTP Method - POST
Payload/Body - {userEmail: "testnHNK@gmail.com", userPassword: "Testing@123"}
header - 

*/



// 2. Response Format

/*

response = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGY5YjM0YmY2NjlkNmNiMGEyNjFmOWQiLCJ1c2VyRW1haWwiOiJ0ZXN0bkhOS0BnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjo5OTIzNDU2NzgxLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzkwOTEyODQ4LCJleHAiOjE4MjI0NzA0NDh9.Gg-W-AlQhrOZ3wdqGhSTGk4iNxjrm8BbUTl5NBLjc_8",
    "userId": "68f9b34bf669d6cb0a261f9d",
    "message": "Login Successfully"
}


*/

import {test, expect} from '@playwright/test'

// page
// browser - broser.newContext()
// context
// request


const url = "https://rahulshettyacademy.com/api/ecom/auth/login"
const loginPayload = {userEmail: "testnHNK@gmail.com", userPassword: "Testing@1234"}

test("API Testing for login", async ({request})=>{

    const response = await request.post(url,
        {
            data: loginPayload,
            headers:{
                "content-type": "application/json"
            }
        }
    )

    const responseBody = await response.json()

    console.log(await responseBody.token);

    expect(responseBody).toHaveProperty("token")
    expect(responseBody).toHaveProperty("userId")
    expect(typeof responseBody.token).toBe("string")

})
