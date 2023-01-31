const os=require("os")

//arch Is Gives the architecture 

// console.log(os.arch());

//How much space is available

const freeSpace=os.freemem();

//It give us in bits of free
// console.log(freeSpace);

//To GB of free

console.log(`${freeSpace/1024/1024/1024}`);


const totalSpace=os.totalmem();

//It give us in bits of free
// console.log(freeSpace);

//To GB of free

//For Memory usage

//ctrl+shift+escape

console.log(`${totalSpace/1024/1024/1024}`);

