// 

function twoSum(nums,target){
	var ans[];
	var map[];

	for(var i = 0;i < nums.length ; i++){
		if(map[target-num[i]]!==undefined){
			ans[0]= map[target-num[i]];
			ans[1]= i;
			return ans;
		}
		map[num[i]] = i;
	}
}
var nums = [1,2,3,5,6,7,8];
twoSum(nums,15);
console.log(ans);
