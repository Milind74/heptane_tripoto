var input=`2
5
1 2 3 4 5
5
2 2 2 2 2`
var input=input.split("\n");
var t=+input[0];
for (let a = 0; a < t; a++) {
var length=input[2*a+1].split(" ").map(Number);
var array=input[2*a+2].split(" ").map(Number);
console.log(array);
    
}
