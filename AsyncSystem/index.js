const fs=require('fs')

// fs.writeFile('note.txt',"Hi This is Asynchronous Example",(err,data) => {
//     console.log(data)
// })


//For Reading a Asynchronous files 

// fs.readFile('note.txt',"UTF-8",(err,data) => {
//     console.log(data)
// })


//FOR APPENDING Files 

fs.appendFile("note.txt","Data appended successfully",(err,data) =>{
    console.log(data);
    
})


