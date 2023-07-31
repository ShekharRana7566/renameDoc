const fs=require('fs')
const replacethis="yo"
const replacewith="hmm"
const preview=true
try {
    // const data=fs.readdir("data",(err,data)=>{ //used to rename files in data folder
        const data=fs.readdir(".",(err,data)=>{ //will rename files globally
        data.forEach(element => {
            let newFile="data/"+element.replace(replacethis,replacewith)
            if(!preview){
                fs.rename("data/"+element,newFile,()=>{
                    console.log("sucess")

                })
            }
            else{
              if("data/"+element!=newFile)  console.log(`data/${element} will be renamed to ${newFile}`)
            }
        });
    })
} catch (err) {
    console.error(err)
}