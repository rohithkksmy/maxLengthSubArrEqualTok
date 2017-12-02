/*
This is a simple algorithm which illustrate the logic to get the maximum length of subarray
which equals to a value given as k

If the array is like [3,1,2,1] and the given value is 3, the maximum length of sub array's sum which equals
to k is [1,2] or [2,1] is 2

So by keeping the above test case.
*/

function maximum(a,k){// a-> array, k -> given value
	var store = Array(a.length+1);
	for(var i =0;i<store.length;i++){
		if(i==0){
			store[0] = 0;
		}else{
			store[i] = store[i-1]+nums[i-1];
		}
    }
	/* storing the sum of the accumulated value from the given array
	here store = [0,3,4,6,7]
	here we compare the differce between the previous value and check it whether its equal to given value
	so at first position  3-0 gives 3  and the postion is store as 1;
	At one point the array is iterated in a way such as 6- 3 = 3, and the position becomes 3 -1 = 2 
	and that is stored in the values
	which suggets that the accumulated sum from(from position 1 to 3 i.e sum 3 to 6)  
	traverses through two elements with position 1 and 2*/
	
	var max =0;
	for(var i = 0;i< store.length;i++){
		for(var j =0; j< store.length;j++){
			if((store[j]-store[i]) == k){
				if(max< j-i){
					max = j-i;
				}
			}
		}
	}
	return max;
}