import './lib/lib.js';

func('#first').on('click', () => {
    func('div').eq(1).fadeOut(1000);
});

func('[data-count="second"]').on('click', () => {
    func('div').eq(2).fadeOut(1000);
});

func('button').eq(2).on('click', () => {
    func('.w500').fadeOut(1000);
});