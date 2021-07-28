import './lib/lib.js';

func('#trigger').click(() => func('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Modal body text'
    },
    btns: {
        count: 3,
        settings: [
            ['Close', ['btn-danger', 'mr10'], true],
            ['Save changes', ['btn-success'], false, () => {alert('Changes saved')}],
            ['Another btn', ['btn-warning', 'ml10'], false, () => {alert('Hello world')}]
        ]
    }
}));