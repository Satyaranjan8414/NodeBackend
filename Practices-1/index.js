const fs=require("fs")
const input=process.argv
const dns=require("dns");
// console.log(input)

// fs.writeFile("hepler_functions.js","Hi i am Satya",(err)=>{
//     console.log("File Created")
// })
const getIp=(arg)=>{
    dns.lookup(`www.${arg}.com`,function(err,ip){
        console.log(ip)
    })
}
const writeFile = (arg,data1)=>{
    fs.writeFile(arg,data1,(err)=>{
        console.log("File Created")
    })
}

const readFile=()=>{
    fs.readFile("text.txt","utf8",(err,data)=>{
        console.log(data);
        
    })
}

const deletefile=(fileName)=>{
    fs.unlink(fileName,(err)=>{
        console.log("File Deleted");
        
    });
}

if(input[2]==="gip"){
    console.log(input[3])
    getIp(input[3])
}else if(input[2]==="wf"){
    console.log(input[3])
    writeFile(input[3],input[4])

}else if(input[2]==="rf"){
    readFile(input[3])
}else if(input[2]==="df"){
    deletefile(input[3])
}

