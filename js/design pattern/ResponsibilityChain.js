const firstFilter = (function(){
    function firstFilter(){}
    firstFilter.prototype.isAble = function(work){
        const ableScore = 1;
        if(work.score === ableScore){
            return true;
        } else {
            return false;
        }
    }
    firstFilter.prototype.getFilterName = function(){
        return "firstFilter";
    }
    return firstFilter;
})();

const secondFilter = (function() {
    function secondFilter(){}
    secondFilter.prototype.isAble = function(work){
        const ableScore = 2;
        if(work.score === ableScore){
            return true;
        } else {
            return false;
        }
    }
    secondFilter.prototype.getFilterName = function(){
        return "secondFilter";
    }
    return secondFilter;
})();

const client = (function(){
    function client(todo,ableScore){
        const work = {
            score: ableScore,
            todo: todo
        }
        let filters = [new firstFilter(),new secondFilter()];
        for(Filter of filters){
            console.log(Filter.isAble(work))
            if(Filter.isAble(work)){
                console.log("it works in " + Filter.getFilterName());
                break;
            }
        }
    }
    return client;
})();

const client1 = new client("sth Todo",1);