const fs=require('fs')

// fs.writeFileSync('read.txt',"Hi I am Satyaranjan Maity")

// fs.writeFileSync('read.txt',"Hi I am Santosh Yadav\n")

// fs.appendFileSync('read.txt',"How Are You all\n")

const read_data=fs.readFileSync('read.txt')

org_data=read_data.toString();

console.log(org_data);
