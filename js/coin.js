function rand(m,n){
    return m+Math.floor((n-m+1)*Math.random());
    //m이상 n 이하의 무작위 정수를 반환
}
function randFace(){
    return ["crown","anchor","heart","spade","club","diamond"]
    rand[(0,5)];
}
//여러 모양들 중에서 1개를 뽑는다.
let funds = 50;
let totalBet = 0;
let betWhere = randFace();
let bet = rand(1,funds);
const shape = {crown:0,anchor:0,heart:0,spade:0,club:0,diamond:0};
let randomshape = randFace();
let win = 0;
if(bet === 7){
    totalBet = funds;
}
else{
    totalBet = bet;
}
funds = funds - totalBet;
shape[betWhere] = totalBet;
if(randomshape === betWhere){
    funds = totalBet * 2;
}
console.log(funds);