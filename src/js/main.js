import './lib/lib.js';

func('button').on('click', function() {
    func('div').eq(2).toggleClass('active');
});

func('div').click(function() {
    console.log(func(this).index());
});

console.log(func('div').find('.some'));

// console.log(func('button').html('hello'));
// console.log(func('div').eq(2).find('.some'));
// console.log(func('.some').closest('.findMe'));

console.log(func('.findMe').siblings());