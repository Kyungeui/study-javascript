const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

for ( const key in exam) {
    let sum = 0;

    for (const p of exam[key]){
        sum +=p;
    }
    let avg = parseInt(sum / exam[key].length);

    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.",key,sum,avg);
}


