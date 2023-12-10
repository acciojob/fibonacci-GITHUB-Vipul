
function fibonacciHelper(num,arr)
	{
		if(num==1) return arr[0];
		if(num==2||num==3) return arr[1];
		if(arr[num]!=undefined) return arr[num];
		return arr[num]=fibonacciHelper(num-1,arr)+fibonacciHelper(num-2,arr);
	}
function fibonacci(num) {
// your code here
	let arr=new Array();
	arr.push(0);
	arr.push(1);
	arr.push(1);
	return fibonacciHelper(num,arr);
}

module.exports = fibonacci;
