
/**normal function a amra  even cheak kori aivabe  */
var even = function(num){
    vagSesh = num%2;

    if(vagSesh===0) return true;
    return false;

}

console.log("Aita even number true or false answer is: " + even(4));
console.log("Aita even number true or false answer is: " + even(5));


/**Array te even cheak */

var myArray = [2,4,5,8,6];

var evenNum = function(num){
    bagSesh = num%2;
    if(bagSesh===0) return true;
    return false;
}

/**array te full array te odd or even number ase kina seta cheak korar jonno
 *  amara every()function use kori.. 
 * aikhane jodi full array te jodi sov gulai odd or even number hoi
 *  tobei aita true hobe otherwise aita false hobe */

console.log("The full array sov gula element even number ki: " + myArray.every(evenNum));

/**aikhane some() method dara amra cheak kori aikhane full array te akta odd or even number ase kinna
 *   aita jehetu even ar code likhsi sehetu aikhane array te even number ase so aita true print korbe */

console.log("The array te akta holeo even number ase ki ki: " + myArray.some(evenNum));

