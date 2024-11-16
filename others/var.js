var result = [];
var a = 3;
var total = 0;
function foo(a){
    for(var i=0;i<3;i++){
        result[i] = function(){ // 闭包
            total += i*a;
            console.log(a,i,total) // 1 3 3, 1 3 6, 1 3 9, 因为i是全局变量, 所以每次循环都会覆盖i的值
        }
    }
}
foo(1);
result[0]() //3
result[1]() // 6
result[2]() // 9


