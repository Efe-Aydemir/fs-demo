// CURD => Create-Update-Read-Delete

// İmport Module
const fs = require('fs')

// Create File - Update File
fs.writeFile('employees.json',' {"name": "Employee 1 Name", "salary": 2000} ',(err,data) => {
    if(err) console.log(err)
    else {
        console.log('Successful Create File')
    }
})


// Read File
fs.readFile('employees.json','utf-8',(err,data) => {
    if (err) console.log(err)
    else {
        console.log(data)
    }
})

fs.writeFile('employees.json',' {"name": "upload 1 Name", "salary": 2021} ', (err,data ) => {
    if (err) console.log(err)
    else {
        console.log('Successful Update File')
    }
})

fs.unlink('employees.json',(err,data) => {
    if (err) console.log(err)
    else {
        console.log('Successful Delete File')
    }
})