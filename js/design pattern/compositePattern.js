const lowLevelUser = (function(){
    function lowLevelUser(){
        const speak = () =>{
            console.log("hihi");
        }
        return {
            speak,
        }
    }
    return lowLevelUser;
})();

const normalUser = (function(){
    function normalUser(){
        const bringedUser = [];
        const speak = () => {
            console.log("hihi");
        }
        const bringUser = (user) => {
            bringedUser.push(user);
        }
        const getBringUser = () => {
            console.log(bringedUser);
        }
        return {
            bringUser,
            speak,
            getBringUser,
        }
    }
    return normalUser;
})();

const normalUser1 = new normalUser();
const lowLevelUser1 = new lowLevelUser();
const blackCow = new lowLevelUser();

normalUser1.bringUser(lowLevelUser1);
normalUser1.getBringUser();
normalUser1.bringUser(blackCow);
normalUser1.getBringUser();