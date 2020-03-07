const Subject = function(){
    let observers = [];
    return {
        subscribeObserver: function(observer){
            observers.push(observer);
        },
        notificateObserver: function(number){
            if(observers.length > 0){
                observers[number].notificate(number);
            }
        }
    }
}

const Observer = function(){
    return {
        notificate: function(index){
            console.log("notificate-" + index)
        }
    }
}

const sub1 = new Subject();

const observer1 = new Observer();

sub1.subscribeObserver(observer1);
sub1.notificateObserver(0);