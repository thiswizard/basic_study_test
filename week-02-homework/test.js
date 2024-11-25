// forEach 사용 문제


const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]


objArray.forEach((value) => {
    console.log(value)
})


// indexOF 구현 문제

const arr = [1, 2, 3, 4, 5];
function myIndexOf(arr, value) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == value){
            return i
        }
        
    }
return -1
}

const index1 = arr.indexOf(3);      // 2
const index2 = myIndexOf(arr, 3);   // 2
console.log(index1 === index2);     // true


// includes 구현 문제

const arr2 = [1, 2, 3, 4, 5];
function myIncludes(arr, value) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == value){
            return true
        }
    }

return false
}

const includes1 = arr2.includes(3) // true
const includes2 = myIncludes(arr2, 3); // true
console.log(includes1 === includes2 ); // true