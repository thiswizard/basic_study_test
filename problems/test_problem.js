// [데이터 타입 연습 문제]

// 문제 1: 자신의 이름과 나이를 변수에 저장하고 출력하세요.

let the_name = "ironman"
const age = 25

console.log(the_name,age)

// 문제 2: 불리언 값을 저장하는 변수를 만들고 출력하세요.

const test_boolean = true
const test_boolean_false = false

console.log(test_boolean,test_boolean_false)

// 문제 3: null과 undefined의 차이를 콘솔로 확인하세요.
// 힌트:
// var undefinedVar;
// var nullVar = null;
// 두 변수를 console.log로 출력하고, typeof 연산자를 사용하여 타입을 확인해보세요.

const test_null = null
var test_undefined 

console.log(typeof test_null , test_undefined)


// 문제 4: 좋아하는 음식 3가지를 배열에 저장하고 첫 번째 음식을 출력하세요.

const arr = ["초밥","떡볶이","돈까스"]
console.log(arr[0])

// 문제 5: 사람의 정보를 객체로 만들어 이름과 나이를 저장하고 출력하세요.

const human = {
    name : "spiderman",
    age : 25
}

console.log(human.name,human.age)