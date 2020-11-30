const app13 = new Vue({
  el: '#app13',
  data: { 
    styleObject: {
      color: 'green',
      fontSize: '33px'
    },
    randomNumber: 0
  }
});



const app14 = new Vue({
  el: '#app14',
  data: {
    randomNumber: 0
  },
  methods: {
    generateRandomNumber(event) {
      this.randomNumber = Math.round(Math.random() * 5);
    }
  }
});