// Основная идея: храним в массиве текущий элемент и текущий минимум


var MinStack = function() {
    this.stack = [];
};


MinStack.prototype.push = function(val) {
    if(this.stack.length == 0) {
        this.stack.push([val, val])
    } else {
        const minSoFar = this.stack[this.stack.length - 1][1]
        this.stack.push([val, Math.min(val, minSoFar)])
    }
};


MinStack.prototype.pop = function() {
    this.stack.pop()
};


MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0]
};


MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1]
};


// repeat