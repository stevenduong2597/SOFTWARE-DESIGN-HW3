const express =require('express')
const request =require('supertest')
const server = require('../server')

const app = express();

app.use(express.json());

describe('POST/Users', () => {
    /*describe('given a username and password', () => {
      //should user provide name, email and password
      //server should save to server
      test('should respond with 200', () => {
        const response = request(server).post("/register").send({
            name:"name",
            email:"email@e",
            password:"password"
        })
        expect(response.statusCode).toBe(200)
      })
      
      //return email and password
    })*/
    


    describe ('GET', () => {
        test('should check to see if there are users ', async() => {
            

        })
        
        
      
    })
    
})
