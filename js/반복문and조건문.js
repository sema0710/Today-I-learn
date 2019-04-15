let funds = 50;
function rand(m,n){
    return m + Math.floor((n - m + 1)*Math.random());
}
function randFace(){
    return ["crown","anchor","heart","spade","club","diamond"][rand(0,5)];
}
const bets={
 crown:0,anchor:0,heart:0,spade:0,club:0,diamond:0
}
if(totalBet = 7){ 
let totalBet = funds;
bets.heart = totalBet;
}else{}
funds = funds - totalBet;
let remaining = totalBet;
do {
    let bet = rand(1,remaining);
    let face = randFace();
    bets[face] = bets[face] + bet;
    remaining = remaining-bet;
}while(remaining > 0);
