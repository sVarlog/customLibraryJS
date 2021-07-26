const func = function(selector) {
    return new func.prototype.init(selector);
};

func.prototype.init = function(selector) {
    if (!selector) {
        return this; // empty object {}
    }
    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

func.prototype.init.prototype = func.prototype;

window.func = func;

export default func;