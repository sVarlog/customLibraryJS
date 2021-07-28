import func from '../core';

func.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]).click(() => {
            func(this[i]).toggleClass(headActive);
            func(this[i].nextElementSibling).toggleClass(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = `${this[i].nextElementSibling.scrollHeight + paddings}px`;
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';
            }
        });
    }
};

func('.accordion-head').accordion();