var randomNum = Math.random();
var rangeNUm = Math.floor((randomNum * 100) + 1);

var eggs = [1, 2, 3, 4, 5];

var nums = [];

var x = 1;
function fizzBuzz(){

    if (x % 3 === 0) {
        nums.push("Fizz");
    }
    else if (x % 5 === 0) {
        nums.push("Fizz Buzz");
    }
    else{ 
        nums.push(x);
    }
    x++;
    console.log(nums);
}


function take99Bottles(){
    for (let index = 99; index > 0; index--) {
        console.log(index + " bottles of beer on the wall, " + index + " bottles of beer. Take 1 down, pass it round, " + (index - 1) + " bottles of beer on the wall.");        
    } 
    
}

take99Bottles();
