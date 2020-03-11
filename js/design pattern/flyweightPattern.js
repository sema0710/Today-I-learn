const Soldier = (function(){
    function Soldier(){
        Soldier.prototype.health = 10;
        Soldier.prototype.abuility = 5;
    }
    return Soldier;
})();

const soldier1 = new Soldier();
const soldier2 = new Soldier();

soldier1.health = 0;
console.log(soldier1.health, soldier2.health);