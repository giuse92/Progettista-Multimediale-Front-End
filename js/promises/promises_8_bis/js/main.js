/*
new Promise(function(resolve, reject) {
		let milliseconds=6000;
    		setTimeout(() => resolve("Finita terza simulazione di caricamento"), milliseconds);
	  });
	  */
function restituisciPromise(msg, ms)
{
	let promise=new Promise(function(resolve, reject)
	{
		setTimeout(() => resolve(msg), ms);
	});

	return promise;
}


let promise1=restituisciPromise("Finita primo simulazione di caricamento", 2000)
.then(function(result)
{
 	console.log(result);

	//let promise1=restituisciPromise("Finita seconda simulazione di caricamento", 3000);

	return restituisciPromise("Finita seconda simulazione di caricamento", 3000);
}).then(function(result)
{
 	console.log(result);

	//let promise1=restituisciPromise("Finita terza simulazione di caricamento", 2000);
	
	return restituisciPromise("Finita terza simulazione di caricamento", 2000);
}).then(function(result)
{
	 console.log(result);
	 
	 //let promise1=restituisciPromise("Finita quarta simulazione di caricamento", 8000);
	
	 return restituisciPromise("Finita quarta simulazione di caricamento", 8000);
}).then(function(result)
{
	 console.log(result);
	 
});

/*//1a.
function n(resolve)
{
	resolve("Finita prima simulazione di caricamento");
}*/

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