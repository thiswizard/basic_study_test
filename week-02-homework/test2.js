// forEach 구현
const objArray0 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myForEach 를 구현하여 arr.forEach 와 동일한 값이 나오도록 하기.
  function myForEach(arr, callback) {
    for(let i=0; i<arr.length; i++){
        callback(arr[i])
    }
  }
  
  /**
  { name: 'apple', price: 100 }
  { name: 'banana', price: 200 }
  { name: 'grape', price: 300 }
   */
  objArray0.forEach(function (obj) {
    console.log(obj);
  });
  
  myForEach(objArray0, function (obj) {
    console.log(obj);
  });





// find 사용

const objArray1 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]

let result = objArray1.find((value)=> value.name == 'grape')


console.log(result)


// findindex 사용

const objArray2 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]

let result2 = objArray2.findIndex((value) => value.name == 'apple')
console.log(result2)
