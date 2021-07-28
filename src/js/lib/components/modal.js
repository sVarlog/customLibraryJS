import func from '../core';

func.prototype.modal = function(created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        func(this[i]).click((e) => {
            e.preventDefault();
            func(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(el => {
            func(el).click(() => {
                if (created) {
                    func(target).fadeOut(500, () => {document.querySelector(target).remove()});
                } else {
                    func(target).fadeOut(500);
                }
                document.body.style.overflow = '';
            });
        });

        func(target).click(e => {
            if (e.target.classList.contains('modal')) {
                if (created) {
                    func(target).fadeOut(500, () => {document.querySelector(target).remove()});
                } else {
                    func(target).fadeOut(500);
                }
                document.body.style.overflow = '';
            }
        });
    }
};

func('[data-toggle="modal"]').modal();

func.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // btns = {count: num, settings: [[text, classNames = [], close, callback]]}
        const buttons = [];
        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]);
            btn.textContent = btns.settings[j][0];
            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', true);
            }
            if (btns.settings[j][3] && typeof(btns.settings[j][3] === 'function')) {
                // btn.addEventListener('click', btns.settings[j][3])
                func(btn).click(btns.settings[j][3]);
            }

            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">${text.title}</div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.append(modal);
        func(this[i]).modal(true);
        func(this[i].getAttribute('data-target')).fadeIn(500);
    }
};