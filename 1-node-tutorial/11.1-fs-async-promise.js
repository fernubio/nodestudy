const {readFile, writeFile} = require ('fs').promises
/* const util                  = require ('util')
const readFilePromise       = util.promisify(readFile)
const writeFilePromise      = util.promisify(writeFile) */



const start = async () => {

    try{
        const first  = await readFile('./contente/first.txt' , 'utf-8')
        const second = await readFile('./contente/second.txt', 'utf-8')
        await writeFile(
            './contente/result-mind-greande.txt', 
            `THIS IS AWESOME : ${first} \n ${second}`,
            { flag: 'a' }
        )

        console.log ( first, '\n', second )
    }catch (error){
        console.log(error)
    }
}
start()


/*
getText('./contente/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))*/


/*
const getText = (path)=>{
    return new Promise ((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}*/