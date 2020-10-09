let app = new Vue({
    el: "#app-1",
    data: {
        content: "Hello world"
    }
});

/*let app2 = new Vue({
    el: "#app-2",
    data: {
        messaggio: `Rand ${new Date().toLocaleString()}`
    }
});*/

let app2 = new Vue({
    el: "#app-2",
    data: {
        message: `Rand ${new Date().toLocaleString()}`
    }
});

let app3 = new Vue({
    el: "#app-3",
    data: {
        vedi: true, //o false
        testo: 'Questo è un testo'
    }
});

let app4 = new Vue({
    el: "#app-4",
    data: {
        elements: [
            { text: 'Javascript' },
            { text: 'Vue' },
            { text: 'C#' },
            { text: 'Angular' }
        ]
    }
});

let app4a = new Vue({
    el: "#app-4a",
    data: {
        elements: ['Javascript', 'Vue', 'C#', 'Angular']
    }
});

let app5 = new Vue({
    el: "#app-5",
    data: {
        orario: new Date().getHours()
    }
});

let app6 = new Vue({
    el: "#app-6",
    data: {
        message: 'ciao pippo tutto appo'
    },
    methods: {
        invertiMessage: function() {
            this.message = this.message.split('').reverse('').join('')
        }
    }
});