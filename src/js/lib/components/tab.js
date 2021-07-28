import func from '../core';

func.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        func(this[i]).click(() => {
            func(this[i])
                .addClass('tab-item--active')
                .siblings()
                .removeClass('tab-item--active')
                .closest('.tab').find('.tab-content')
                .removeClass('tab-content--active')
                .eq(func(this[i]).index())
                .addClass('tab-content--active');
        });
    }
};

func('[data-tabpanel] .tab-item').tab();