Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

var test = "\u0041";
var aaa = "A";
var what = test == aaa;

console.log("what:::" + what); //true