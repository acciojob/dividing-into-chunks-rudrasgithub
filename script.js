const arr = [1, 2, 3, 4, 1, 0, 2, 2];

function divide(arr,n) {
	let sum = 0;
	let ans = [];
	let chunk_arr = [];
	let length = arr.length;
	for(let i=0;i<length;i++) {
		if(sum+arr[i] > n) {
			sum = arr[i];
			ans.push(chunk_arr)
			chunk_arr = [arr[i]]
		} else {
			chunk_arr.push(arr[i])
			sum+=arr[i];
		}
	}
	ans.push(chunk_arr)
	return ans;
};

const n = prompt()
alert(JSON.stringify(divide(arr, n)));
// document.getElementById("result").innerText = divide(arr, n))