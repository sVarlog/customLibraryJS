import './lib/lib.js';

func('button').on('click', function() {
    func(this).toggleClass('active');
});