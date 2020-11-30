var app1 = new Vue({
    el : '#app-1',
     data: {
        value : 'ciaoonee'
     }
 })

 var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Rand ' + new Date().toLocaleString()
    }
  })  
   

let app3 = new Vue({
     el:'#app-3',
     data:{
         vedi: true,
         testo: 'questo é un testo'  
     }
}) 

let app4 = new Vue({
    el:'#app-4',
    data: {
        elements: [
          { text: 'JavaScript' },
          { text: 'Vue' },
          { text: 'C#' },
          { text: 'Angular' }
        ]
      }
})

let app4a = new Vue({
    el:'#app-4a',
    data: {
        elements: ['JavaScript','Vue','C#','Angular']
      }
})

var app5 = new Vue({
    el : '#app-5',
     data: {
       orario  : new Date().getHours()
      }
})

var app6 = new Vue({
    el : '#app-6',
     data: {
        message: 'ciao pippo tutto appo'
      },
      methods: {
        invertiMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
})
