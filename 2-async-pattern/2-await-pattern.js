const {readFile, writeFile} = require('fs').promises
// const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }




// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

//We can even use async await

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.text', `This is awesome: ${first} ${second}`, 
        {flag: "a"})
        // const second = await writeFile('./content/result-async-util.txt', 'utf8')
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}

start();