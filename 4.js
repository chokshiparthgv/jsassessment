function merge(nums, low, mid, high) {
  let size1 = mid - low + 1;
  let size2 = high - mid;
  let left = new Array(size1);
  let right = new Array(size2);
  for(let i = 0; i < size1; i++){
      left[i] = nums[low + i];
  }
  for(let j = 0; j < size2; j++){
      right[j] = nums[mid+1 + j];
  }
  
  let i = 0;
  let j = 0;
  let k = low;
  while(i < size1 && j < size2) {
      if(left[i] <= right[j]){
          nums[k++] = left[i++];
      }
      else {
          nums[k++] = right[j++];
      }
  }
  while(i < size1) {
      nums[k++] = left[i++];
  }
  while(j < size2) {
      nums[k++] = right[j++];
  }
}

function mergeSort(nums, low, high) {
  if(low >= high) return;
  let mid = low + parseInt((high-low)/2);
  mergeSort(nums, low, mid);
  mergeSort(nums, mid+1, high);
  merge(nums, low, mid, high);
}

let nums = [2,6,1,4,3,9,5,7];
mergeSort(nums, 0, nums.length-1);
console.log(nums);