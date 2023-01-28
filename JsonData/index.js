const fs=require('fs');

const Data={
    name:"satya",
    age:25,
    gender:"male",
    lovelife:false,
};
const jesonData=JSON.stringify(Data)

// fs.writeFile('jeson1.json',jesonData,(err)=>{
//     console.log("Bye Bye")
// })

fs.readFile("jeson1.json","utf-8",((err,data)=>{
    const ojData=JSON.parse(data)
    console.log(ojData)
}))

