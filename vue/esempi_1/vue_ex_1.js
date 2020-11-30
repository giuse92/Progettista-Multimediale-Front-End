var primoComponente = {
    template: '</code><div>primoComponente. The number: {{num}}</div>',
    data: function() {
      return {
      num: Math.random()
    }
  }
 }
  
 var vm = new Vue({
  el : '#app',
  components: {
    primoComponente: primoComponente
  }
 })

