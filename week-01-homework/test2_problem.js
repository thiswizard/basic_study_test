// [조건문 연습 문제]

// 문제 1: 숫자를 입력받아 짝수인지 홀수인지 출력하세요.

const number1 = 2

if (number1 % 2 == 0){
    console.log(`${number1} 이 값은 짝수입니다`)
}
else{
    console.log(`${number1} 이 값은 짝수가 아닙니다`)
}

// 문제 2: 점수를 입력받아 학점을 출력하세요.
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 그 외 D

const score = 95

if(score>=90){
    console.log("A")
}
else if(score>=80){
    console.log("B")
}
else if(score>=70){
    console.log("C")
}
else{
    console.log("D")
}

// 문제 3: 나이를 입력받아 성인인지 미성년자인지 출력하세요.

let the_age = 20

if(the_age < 19){
    console.log("19세 미만 미성년자 입니다")
}
else{
    console.log("19세 이상  성인 입니다")

}

// 문제 4: switch문을 사용하여 요일을 출력하세요.

const day = 14

switch(day){
    case 11:
        console.log("월요일")
        break
    case 12:
        console.log("화요일")
        break
    case 13:
        console.log("수요일")
        break
    case 14:
        console.log("목요일")
        break
    case 15:
        console.log("금요일")
        break
    case 16:
        console.log("토요일")
        break
    case 17:
        console.log("일요일")
        break
}

// 문제 5: 두 숫자를 비교하여 큰 수를 출력하세요.

let big_num = 132984798147698124679187246912746n

let small_num = 1

let result = big_num > small_num ?  big_num : small_num
console.log(result)