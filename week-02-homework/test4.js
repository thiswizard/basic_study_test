// // filter 구현

const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기.
  function myFilter(arr, callback) { // price 값이 200이상
    const arr_result = []
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            arr_result.push(arr[i])
        }
    }
    return arr_result
  }


  const result6 = myFilter(objArray, function (obj) {
    return obj.price >= 200;
  });


  console.log(result6)

// map 구현

  const objArray1 = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
  function myMap(arr, callback) { // price 값만 출력하기
    const arr_result2 = []
    for(let i=0; i<arr.length; i++){
        arr_result2.push(callback(arr[i]))
    }
    return arr_result2
  }

  const result8 = myMap(objArray1, function (obj) {
    return obj.price;
  });


console.log(result8)

// reduce 사용

const arr = [1, 2, 3, 4, 5];

let result9 = arr.reduce((a,b) => {
    return a + b*2
},0)

console.log(result9)
