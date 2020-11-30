
   
   var app3 = new Vue({
      el: '#app3',
      data: {
          a: true
      }
    });


  
    var app4 = new Vue({
      el: '#app4',
     data:{
        verifica: false
     }
   });




   var app5 = new Vue({
      el: '#app5',
      data: {
          title: 'itemlist',
          itemlist: [
              {
                  qty: 0
              },
              {
                  qty: 10
              },
              {
                  qty: 100
              },
              {
                  qty: 1000
              }
          ]
      }
  })

  var app6 = new Vue({
   el: '#app6',
  data:{
     w: 100,
     h: 200
  }
});
 
 

  var app7 = new Vue({
   el: '#app7',
   data: {
      activeColor: 'red',
      fontSize: 30
    }
});
 

var app8 = new Vue({
   el: '#app8',
   data: {
      styleObject: {
        color: 'green',
        fontSize: '33px'
      }
    }
});


var app8a = new Vue({
  el: "#app8a",
  data: {
    baseStyles: {
      fontSize: "2em",
      fontWeight: 800,
      color: "red"
    },
    overridingStyles: {
      color: "green",
      fontWeight: 100
    }
  }
});

/*
 var app11 = new Vue({
	el : '#app11',
	data: {
	    value : ''
	}
})


var app12 = new Vue({
  el: '#app12',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})   */