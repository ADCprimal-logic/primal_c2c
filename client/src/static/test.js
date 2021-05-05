var vm = new Vue({
    el: '#demo',
    data: {
        msg: 'baby',
        checked: true,
        picked: '',
        selected: '',
        multiSelect: ['', '']
    },
    methods: {
        greet: function (event) {
            alert('hello ' + this.msg)
        }
    },
    template: '<label>{{ msg }}</label>'
})

vm.msg = 'HELLOOOOOOOOOOO!!!! IM HERE!!'