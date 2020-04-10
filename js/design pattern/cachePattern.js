const Fibonacci = (function(){
    function Fibonacci(){
        this.cache = [1,1];
    };
    Fibonacci.prototype.Fib = function(n){
        console.log(this.cache)
        if(n === 0){
            return 0;
        } else if(n <= 2){
            return 1;
        } else if(!this.cache[n]){
            this.cache[n-1] = this.Fib(n-2) + this.Fib(n-1);
        }
        return this.cache[n-1];
    }
    return Fibonacci;
})();

const fibonacci = new Fibonacci();
fibonacci.Fib(20)