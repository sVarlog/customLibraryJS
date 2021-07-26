import func from '../core.js';

func.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classNames);
    }

    return this;
};

func.prototype.removeClass = function(...className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...className);
    }

    return this;
};

func.prototype.toggleClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(className);
    }

    return this;
};