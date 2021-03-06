/** 자신의 주민번호 한 글자씩 모든 숫자를 원소로 갖는 배열 
    jumin을 아래와 같이 정의하시오. */

const ssn = [9,3,1,2,0,8,2,0,0,1,1,1,1];

// 가중치*각자자리수의 총합
let total = 0;
let k = 2

// 마지막 숫자는 제외하고, 기본 코드의 각 12자리와 가중치를 모두 곱하여 합 구하기.
for (let a=0; a<ssn.length-1; a++) {
    total += ssn[a] * k
    //가중치 규칙 적용
    k = k == 9 ? 2 : k+1;
}
// 합한 값을 11로 나눈 나머지 값을 구한다.
let s = total % 11;

// 11에서 그 나머지 값을 뺀 후, 이를 10을 나눈 나머지를 구한다. 
let t = (11-s) % 10;

// 나머지의 1의 자리 값과 주민등록 번호 마지막 자리 값이 맞아야 유효한 주민등록번호이다.
if (t == ssn[ssn.length-1]) {
    console.log("유효합니다.");
} else {
    console.log("유효하지 않습니다.")
}

