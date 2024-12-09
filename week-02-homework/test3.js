// // find 구현 

const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFind 를 구현하여 arr.find 와 동일한 값이 나오도록 하기.
  function myFind(arr, callback) {
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            return arr[i]
        }
    }
  }
  
  const result1 = objArray.find(function (obj) {
    return obj.name === 'banana';
  });
  
  const result2 = myFind(objArray, function (obj) {
    return obj.name === 'banana';
  });
  console.log(result1, result2); // true


  // findIndex 구현

  const objArray1 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFindIndex 를 구현하여 arr.findIndex 와 동일한 값이 나오도록 하기.
  function myFindIndex(arr, callback) {
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            return i
        }
    }
  }
  
  const result3 = objArray1.findIndex(function (obj) { // 1출력
    return obj.name === 'banana';
  });
  
  const result4 = myFindIndex(objArray1, function (obj) {
    return obj.name === 'banana';
  });
 
  console.log(result3 == result4)

// filter 사용

  const objArray2 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]

 let result5 = objArray2.filter((value) => {
    return value.price>=200
  })
  
  console.log(result5)


// map 사용

const objArray3 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]

let result6 = objArray3.map((value) => {
    return value.price
})

console.log(result6)