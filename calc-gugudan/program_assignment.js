import readlineSync from 'readline-sync';


// 플레이어에 선택을 받고 해당 프로그램시작
// 1를 입력하면 사칙연산 프로그램 작동 
// 2를 입력하면 구구단 출력기 실행 (2단부터 9단까지의 구구단 순서대로 출력)
// 만약 다른값을 입력하면 1, 2 중에 입력하세요 라는 메시지 출력되고 다시 입력됨



function main() {
while(true){
    let choice = readlineSync.question("1.사칙연산 2.구구단 출력기:")
    switch(choice){
        case "1":
            console.log("사칙연산을 선택하셨습니다\n")
            calculator()
            break
        case "2":
            console.log("구구단 출력기를 선택하셨습니\n")
            printMultiplicationTable()
            break
        default:
            console.log("1, 2 중에 입력하세요")
            continue
                    }
break
}}

function calculator() {
while(true){
let num1 = Number(readlineSync.question("첫번쨰 값을 입력해주세요:"))
let num2 = Number(readlineSync.question("두번쨰 값을 입력해주세요:"))
let choice = readlineSync.question("원하는 사칙연산을 입력해주세요 1.더하기 , 2.빼기 , 3.곱하기 , 4.나누기 ,5.그만하기:")
    switch(choice){
        case "1": // 더하기
            console.log(`${num1} + ${num2} = ${num1+num2}`)
            continue
        case "2": // 빼기
            console.log(`${num1} - ${num2} = ${num1-num2}`)
            continue
        case "3": // 곱하기
            console.log(`${num1} * ${num2} = ${num1*num2}`)
            continue
        case "4": // 나누기
            console.log(`${num1} / ${num2} = ${num1/num2}`)    
            continue
        case "5":
            console.log("사칙연산을 그만 하도록 하겠습니다")
            break
        default :
            console.log("잘못 입력되었습니다 다시입력하세요")
            continue
        }
break
}
}


function printMultiplicationTable() {
    for(let i=2; i<=9; i++){
        for(let j=1; j<=9; j++){
            console.log(`${i} * ${j} = ${i*j}`)
        }
    }
}

// 프로그램 실행
main();
