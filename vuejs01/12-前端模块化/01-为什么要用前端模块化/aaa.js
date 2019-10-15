/**
 * 1.(function(){})() 闭包解决全局变量冲突
 * 2.将函数返回的对象赋值给变量，可以实现代码复用
 */

var ModuleA = (function(){

  var obj = {};
  var num1 = 10;
  var num2 = 100;
  var flag = true;

  function sum(){
    console.log(num1 + num2);
  }

  if(flag){
    sum();
  }

  obj.flag = flag;
  obj.num1 = num1;
  obj.sum = sum();

  return obj;

})()