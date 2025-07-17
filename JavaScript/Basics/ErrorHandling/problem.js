// 💻 Problem: File Downloader Simulator
// You're simulating a file download function in JavaScript. The function should:
// Be called downloadFile(fileName).
// If fileName is empty or not provided, throw an error:
// "Filename must be provided!"
// Otherwise, log: "Downloading <fileName>..." and return "Download complete!"
// In the catch block, return the error message.
// In the finally block, log: "Cleaning up temporary files..."

const downloadFile = (filename) => {
    try{
        if(!filename){
            throw new Error("Filename must be provided!");
        }
        else{
            console.log("Downloading ",filename,"...");
            return ("Download Complete");
        }
    }
    catch(error){
        return error.message;
    }
    finally{
        console.log("Cleaning up temporary files...");
    }
}

console.log(downloadFile("myFile.txt"));
// Should log: Downloading myFile.txt...
// Then: Cleaning up temporary files...
// Then return: "Download complete!"

console.log("\n<-------------->");

console.log(downloadFile(""));
// Should log: Cleaning up temporary files...
// Then return: "Filename must be provided!"

console.log("\n<-------------->");

console.log(downloadFile());
// Should log: Cleaning up temporary files...
// Then return: "Filename must be provided!"

console.log("\n<-------------->");
console.log(downloadFile("report.pdf"));
