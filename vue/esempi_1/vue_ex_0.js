var app = new Vue({
    el : '#app',
     data: {
        value : 'ciao'
     }
   })


   var app2 = new Vue({
      el: '#app-2',
      data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    })   



    var app3 = new Vue({
      el: '#app-3',
      data: {
        seen: true
      }   
    })


    var app4 = new Vue({
      el: '#app-4',
      data: {
        todos: [
          { text: 'JavaScript' },
          { text: 'Vue' },
          { text: 'Angular' }
        ]
      }
    })


    var app4a = new Vue({
      el : '#app-4a',
      data: {
        dogs: ['Barboncino', 'Volpino', 'Pastore Tedesco']
      }
    })

    var app5 = new Vue({
      el: '#app-5',
      data: {
        message: 'ciao'
      },
      methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
    })


    var app6 = new Vue({
      el: '#app-6',
      data: {
        message: 'Hello Vue!'
      }
    })
    
    
    var app7 = new Vue({
      el : '#app-7',
       data: {
         orario  : new Date.getHours()
        }
     })


     var app8 = new Vue({
      el : '#app-8',
      data: {
        check: false
       }
      })