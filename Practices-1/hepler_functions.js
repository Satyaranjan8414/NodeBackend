const fs=require("fs")
const dns=require("dns");
const cowsay=require("cowsay")

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

const makeCowsay=(content)=>{
    console.log(cowsay.say({
        text: content
    }))
}

module.exports={getIp,writeFile,readFile,deletefile,makeCowsay}