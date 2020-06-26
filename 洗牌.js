/**
 * 
 * @param {any[]} array 
 */
var shuffle = function(array){
    for(let i = array.length - 1;i>=0;i--){
        const rnd = Math.floor(Math.random() * (i + 1));
        let c1 = array[i]
        let c2 = array[rnd]
        array[i] = c2
        array[rnd] = c1
    }
    return array
}
for(let i = 0; i < 10;i++){
    console.log(shuffle([1,2,3,4,5]))
}
