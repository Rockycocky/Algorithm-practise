function fib(n){
	var a,b,res;
	a = b = 1;
	for (var i = 3; i < n; i++) {
		res = a +b ;
		a = b;
		b = res;
		}
		return res;
	}