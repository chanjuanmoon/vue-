var ModuleB = (function(){

  var flag = ModuleA.flag;
  if(flag){
    console.log('aaa的设置');
    console.log(ModuleA.num1);
    ModuleA.sum;
  }

  var num1 = 100;
  console.log(num1);

})();