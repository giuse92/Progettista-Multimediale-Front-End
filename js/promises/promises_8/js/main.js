let promise1=new Promise(function(resolve, reject)
{
	let milliseconds=2000;
	setTimeout(() => resolve("Finita prima simulazione di caricamento"), milliseconds);
	//setTimeout(n, milliseconds, resolve); //1a.

}).then(function(result)
{
 	console.log(result);

	return new Promise(function(resolve, reject) {
		let milliseconds=3000;
    		setTimeout(() => resolve("Finita seconda simulazione di caricamento"), milliseconds);
  	});
}).then(function(result)
{
 	console.log(result);

	return new Promise(function(resolve, reject) {
		let milliseconds=6000;
    		setTimeout(() => resolve("Finita terza simulazione di caricamento"), milliseconds);
  	});
}).then(function(result)
{
	 console.log(result);
	 
	 return new Promise(function(resolve, reject) {
		let milliseconds=10000;
    		setTimeout(() => resolve("Finita terza simulazione di caricamento"), milliseconds);
  	});
}).then(function(result)
{
	 console.log(result);
	 
});

//1a.
function n(resolve)
{
	resolve("Finita prima simulazione di caricamento");
}

/*//Con arrow function
let promise1=new Promise((resolve, reject) => {
	let milliseconds=2000;
	setTimeout(() => resolve("Finita prima simulazione di caricamento"), milliseconds);

}).then(function(result)
{
 	console.log(result);

	return new Promise((resolve, reject) => {
		let milliseconds=3000;
    		setTimeout(() => resolve("Finita seconda simulazione di caricamento"), milliseconds);
  	});
}).then(function(result)
{
 	console.log(result);

	return new Promise((resolve, reject) => {
		let milliseconds=5000;
    		setTimeout(() => resolve("Finita terza simulazione di caricamento"), milliseconds);
  	});
}).then(function(result)
{
 	console.log(result);
});*/