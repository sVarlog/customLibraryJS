import func from '../core';

func.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesField.style.width = `${100 * slides.length}%`;
        slides.forEach(el => {
            el.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        const changeSlide = ({dir = false, dot = false}) => {
            if (dir === 'next') {
                offset === func().getNum(width) * (slides.length - 1) ? offset = 0 : offset += func().getNum(width);
                slideIndex >= slides.length - 1 ? slideIndex = 0 : slideIndex++;
            } else if (dir === 'prev') {
                offset === 0 ? offset = func().getNum(width) * (slides.length - 1) : offset -= func().getNum(width);
                slideIndex <= 0 ? slideIndex = slides.length - 1 : slideIndex--;
            } else if (dot) {
                offset = func().getNum(width) * dot;
                slideIndex = dot;
            }
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
            
            slidesField.style.transform = `translateX(-${offset}px)`;
        };

        func(this[i].querySelector('[data-slide="next"]')).on('click', (e) => {
            e.preventDefault();
            changeSlide({dir: 'next'});
        });

        func(this[i].querySelector('[data-slide="prev"]')).on('click', (e) => {
            e.preventDefault();
            changeSlide({dir: 'prev'});
        });

        const sliderId = this[i].getAttribute('id');
        func(`#${sliderId} .carousel-indicators li`).click(e => changeSlide({dot: e.target.getAttribute('data-slide-to')}));
    }
};