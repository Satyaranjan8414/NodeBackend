const fs=require('fs');


//To make any Folder 

fs.mkdir("nameOfTheFolder",(err)=>{
    console.log("Folder created");
})

//To Remove a Folder From Exiting File We have Write Command
fs.rmdir("nameOfTheFolder",(err)=>{
    console.log("Folder removed");
    
});


//To Wite the file we have to Wite This Commnad 

fs.writeFileSync('bio.txt',"Hi This is Curd Files")

//To Apppend without Removing Existing File then we have go through this command 

fs.appendFileSync('bio.txt',"I ma satyaranjan maity")

// To Rename the file

fs.renameSync('bio.txt','mybio.txt')

//To Delete the file

fs.unlinkSync('mybio.txt');