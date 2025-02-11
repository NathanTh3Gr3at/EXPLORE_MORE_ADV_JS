const fs=require('fs');
function readFile(){
    try{
       fs.readFileSync('data.json') 
    }catch{
        console.log('an error occured')
    }
    console.log('hi there')
}
readFile();