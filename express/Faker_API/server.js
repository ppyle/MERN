const express = require("express");
const app = express();
const port = 8000;

const {faker} = require('@faker-js/faker');

class User{
    constructor(){
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.number()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this._id = faker.database.mongodbObjectId()
    }
}

class Company{
    constructor(){
        this._id = faker.database.mongodbObjectId()
        this.name = faker.company.companyName()
        this.address = [
            this.street = faker.address.street(),
            this.city = faker.address.cityName(),
            this. state = faker.address.state(),
            this.zipCode = faker.address.zipCode(),
            this.country = faker.address.country()
        ]
    }
}



app.get('/api/users/new', (req, res)=>{
    let user = new User()
    res.json(user)
})

app.get('/api/companies/new', (req, res)=>{
    let company = new Company()
    res.json(company)
})

app.get('/api/user/company', (req, res)=>{
    let company = new Company()
    let user = new User()
    res.json({
        user: user,
        company: company
    })
})


app.get('/api', (req, res)=>{
    res.json({ message:"hello world"})
})


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );