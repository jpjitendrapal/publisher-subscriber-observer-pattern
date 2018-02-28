function Observer(){
    this.notify = function(index){
        console.log('Observer '+index+' is notified.');
    }
}

function Subscriber(observer){
    this.observerList = [];
}
Subscriber.prototype.subscribe = function(o){
    this.observerList.push(o);
}
Subscriber.prototype.notifyObserver = function(o){
    var index = this.observerList.indexOf(o);
    if(index > -1){
        this.observerList[index].notify(index);
    }
}
Subscriber.prototype.notifyObservers = function(obs){
    for(var index in obs){
        this.notifyObserver(obs[index]);
    }
}
Subscriber.prototype.notifyAllObserver = function(){
    this.notifyObservers(this.observerList);
}

Subscriber.prototype.unsubscribe = function(o){
    var index = this.observerList.indexOf(o);
    this.observerList.splice(index, 1);
}



var o1 = new Observer();
var o2 = new Observer();
var o3 = new Observer();
var o4 = new Observer();

var subscriber = new Subscriber();

subscriber.subscribe(o1);
subscriber.subscribe(o2);
subscriber.subscribe(o3);

subscriber.notifyObservers([o3]);
subscriber.notifyAllObserver();


