
var app9 = new Vue({
  el: '#app9',
  filters: {
    uppercase: function(text) {
      return text.toUpperCase();
    },
    limit: function(text, length) {
      return text.substring(0, length);
    }
  },
  data: {
    cognome: 'Frattaruolo'
  }
});
 