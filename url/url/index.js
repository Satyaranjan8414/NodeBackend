const http = require("http")
const fs = require("fs");
const cowS = require("cowsay")
var dns = require('dns');
 const input = process.argv
 let ip;

const writeinfile=()=>{
    fs.writeFile("employee.txt","Employee names are as follows: \n",((err)=>{
        console.log("file created-->");
    }))
}
const appendData=(fName,fContent)=>{
    fs.appendFile(fName,fContent,((err)=>{
        console.log("file created-->");
    }))
}

const alldetails =(constent)=>{
    console.log(cowS.say({
        text:constent
    }))
}

const readInFile=()=>{
    fs.readFile("employee.txt","utf-8",((err,data)=>{
        console.log("file read")
        alldetails(data)

    }))
}

const getIp=(web)=>{
    var w3 = dns.lookup(`www.${web}`, function (err, addresses, family) {
      console.log(web,addresses);
      ip=addresses
    });
    
}


const deleteFile=()=>{
    fs.unlink("employee.txt",((err)=>{
        console.log("file delete")
    }))
}

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM </h1>")
    }else if(req.url === "/writeinfile"){
        writeinfile() 
        res.end("<h1>Data has been written ovndpb in the file</h1>")
    }else if(req.url === "/enternames"){
        const data =["Aman", "Albert", "Varun", "Rajat", "Nrupul"];
        data.map((ele,ind)=>{
            return appendData("employee.txt",`\n${ele}\n`) 
        })
        
        res.end("<h1>All the names added in the file</h1>")
    }else if(req.url === "/alldetails"){
        readInFile()
        res.end("<h1>plz check the terminal for employess data </h1>")
    }else if(req.url === "/address"){
       console.log("masaischool.com")
        // getIp(input[2])
        // console.log("getip-->",input[1])
        res.end(`<h1>plz check the terminal for ip Address ${ip} </h1>`)
    }else if(req.url === "/delete"){
        deleteFile()
        res.end("<h1>File has been deleted</h1>")
    }else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.end("<h1>404 page error </h1>")
    
    }
})

server.listen(5000,"127.0.0.1",()=>{
    console.log("port 8000 successfully run")
})