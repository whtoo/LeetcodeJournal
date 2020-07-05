var canMakeArithmeticProgression = function(arr) {
    arr = arr.sort((a,b) => a-b)
    let d = null
    for(let i = 0;i < arr.length - 1;i++){
        if(d == null){
            d = arr[i+1] - arr[i]
        } else {
            if(arr[i+1] - arr[i] != d) return false
        }
    }
    return true
};

console.log(canMakeArithmeticProgression([3,5,1]))