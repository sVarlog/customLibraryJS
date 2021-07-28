import func from '../core';

func.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        func(this[i]).click(() => {
            func(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

func('.dropdown-toggle').dropdown();