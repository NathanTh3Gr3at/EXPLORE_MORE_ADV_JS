const fs = require("fs/promises");

async function readFile() {
  let fileData;
  //fileData=fs.readFileSync('data.txt')
  /*  fileData=fs.readFile('data.txt',function(error,fileData){
        console.log('File parsing done!')
        console.log(fileData.toString())
    })
 */

  //original
  /*  fs.readFile("data.txt")
    .then(function (fileData) {
      console.log("File parsing done!");
      console.log(fileData.toString());
    })
    .then(function () {})
    .catch(function (error) {
      console.log(error);
    }); */
  try {
    fileData = await fs.readFile("data.txt");
  } catch (e) {
    console.log(e);
  }

  console.log("File parsing done!");
  console.log(fileData.toString());
}

readFile();
