const Human = (()=>{
    function Human(){
        function hand() {
            console.log("i move hand!");
        }
        const foot = () => {
            console.log("i move foot!");
        }
        const think = () => {
            console.log(":thinking:");
        }
        const head = () => {
            console.log("i am moving head")
        }
        return {
            foot,
            hand,
            think,
            head,
        }
    }
    return Human;
})();

const danceAdaptor = (()=> {
    function danceAdaptor(Human){
        const step = () => {
            Human.foot();
            Human.hand();
        }
        const handBanging = () => {
            Human.head();
            Human.think();
        }
        return {
            step,
            handBanging,
        }
    }
    return danceAdaptor;
})()

const human1 = new Human();
const dance = new danceAdaptor(human1);
dance.step();