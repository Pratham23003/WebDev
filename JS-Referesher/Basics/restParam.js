//use rest params to accept any number of scores and return the total.
let sum = 0;
function getScore(...scores){
    scores.forEach(score => {
        sum += score;
    });
    return sum;
}
const score = getScore(1,4,5,6,7,8,9,123,23,3,3,3,3,3,4,5,1,5);
console.log(score);
///// video left @ 6hrs