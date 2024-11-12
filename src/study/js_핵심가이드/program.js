document.writeln('Hello, world!')

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}

// var that = this;  // 주석우리 위한 기호로 /**/ 대신 //를 사용하는 것을 권함

