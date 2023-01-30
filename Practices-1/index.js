const {getIp,writeFile,readFile,deletefile,makeCowsay}=require("./hepler_functions")

const input=process.argv
// fs.writeFile("hepler_functions.js","Hi i am Satya",(err)=>{
//     console.log("File Created")
// })



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
}else if(input[2]==="mcw"){
    makeCowsay(input[3])
}

