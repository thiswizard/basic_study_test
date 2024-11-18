// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.

let sum = (a,b) => a+b

console.log(sum(5,3))

// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.

let mr_name = (a) => console.log(`안녕하세요 ${a}님!`)

console.log(mr_name("관우"))


// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.

let find_bignum = [3,14,51]
let big = 0

let find = function(a) {
    big = Math.max(...a)
    return big
}
console.log(find(find_bignum))


// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.

let even_num = function(a) {
    if (a % 2 ==0){
        console.log(`${a}는 짝수입니다`)
    }
    else{
        console.log(`${a}는 홀수입니다`)
    }
}

console.log(even_num(10))


// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.

let test = [1,2,3,4,5]
let arr = function(a) {
    for(let i=0; i<a.length; i++){
        console.log(a[i])
    }
}

console.log(arr(test))