


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


