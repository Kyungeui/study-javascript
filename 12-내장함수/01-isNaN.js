/**
 * isNaN(value)
 * 파라미터로 전달된 값이 NaN일 경우 true, 그렇지 않을 경우 false를 반환한다.
 * -> 숫자가 아니면 true, 숫자가 맞다면 false
 * -> 숫자로 변환 가능한 형식일 경우 true
 * 
 * JavaScript의 다른 모든 값과 달리, NaN은 같음 연산(==,===)을 사용해 판별할 수 없다.
 * NaN == NaN, NaN === NaN이기 때문
 * 그래서 NaN을 판별하는 함수가 필요하다.
 */

// 숫자로 변환할 수 없다고 판단하는 경우
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({}));
console.log(isNaN('blabla'));
console.log(isNaN('123ABC'));

// 숫자로 변환할 수 있다고 판단하는 경우
console.log(isNaN(true));       //거짓
console.log(isNaN(null));       //거짓
console.log(isNaN(37));         //거짓
console.log(isNaN('37'));       //거짓:"37"은 NaN이 아닌 숫자 37로 변환됩니다.
console.log(isNaN('37.37'));    //거짓:"37.37"은 NaN이 나닌 숫자 37.37로 변환됩니다.
console.log(isNaN(''));
console.log(isNaN(' '));

