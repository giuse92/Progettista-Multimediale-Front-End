
var app10 = new Vue({
  el: '#app10',
  data: {
    firstname: 'Andrea',
    lastname: 'Frattaruolo'
  },
  computed: {
    fullname: function() {
      return this.firstname + ' ' + this.lastname;
    }
  }
});
 