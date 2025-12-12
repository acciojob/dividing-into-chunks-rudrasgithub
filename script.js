const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let sum = 0;ans.append()
	let ans = [];
	let chunk_arr = []
	for(let i=0;i<arr.length;i++) {
		if(sum+arr[i] > n) {
			sum = arr[i];
			ans.append(chunk_arr)
			chunk_arr = [arr[i]]
		} else {
			chunk_arr.append(arr[i])
			sum+=arr[i];
		}
	}
	return ans;
};

const n = prompt()
alert(JSON.stringify(divide(arr, n)));
