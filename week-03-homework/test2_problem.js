function createuser() {
    return new Promise((resolve , reject) => {
        const luck = Math.random() > 0.9
        if(luck){
            resolve("축하합니다! 황금 보물을 발견했습니다!")    
        }
        else{
            reject("보물을 찾는 데 실패했습니다. 다시 시도하세요")
        }
    },3000)
}



createuser()
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })




function createuser2() {
    return new Promise((resolve,reject) => {
        const luck = Math.random() > 0.9
        if(luck){
            resolve("축하합니다! 황금 보물을 발견했습니다!")
        }
        else{
            reject("보물을 찾는 데 실패했습니다. 다시 시도하세요")
        }
    })
}

async function findteuser2() {
    try{
        const result = await createuser2()
        console.log(result)
    }
    catch(error){
        console.error(error)
    }
}

findteuser2()