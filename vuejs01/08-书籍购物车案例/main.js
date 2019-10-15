const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price:85.90,
        count:1
      },
      {
        id:2,
        name:'《Unix编程艺术》',
        date:'2006-2',
        price:59.00,
        count:1
      },
      {
        id:3,
        name:'《编程珠玑》',
        date:'2008-10',
        price:35.00,
        count:1
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2006-3',
        price:128.00,
        count:1
      },
    ]
  },
  methods:{
    increment(index){
      this.books[index].count ++;
    },
    decrement(index){
      this.books[index].count --;
    },
    removeHandel(index){
      this.books.splice(index,1);
    }
  },
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2);
    }
  },
  computed:{
    totalPrice(){
      //1.普通循环
      // let totalPrice = 0;
      // for(let i =0;i<this.books.length;i++){
      //   totalPrice +=this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      //2.for in
      // let totalPrice = 0;
      // for(let i in this.books){
      //   const book = this.books[i];
      //   totalPrice += book.price * book.count;
      // }
      // return totalPrice;

      //3.for of
      // let totalPrice = 0;
      // for(let item of this.books){
      //   totalPrice += item.price * item.count;
      // }
      // return totalPrice;

      //高阶函数
      return this.books.reduce(function(pre,book){
        return pre +book.price * book.count;
      },0);
    }
  }

})

//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
//filter/map/reduce

const nums = [10,20,4,89,45,222,111,888,333];
//高阶函数实现
let totalNums = nums.filter(n=>n<100).map(n=>n*2).reduce((pre,n)=>pre+n);
console.log(totalNums);
/**
 * 需求：
 * 1.将数组中小于100的数取出
 * 2.所有小于100 的数 *2
 * 3.求和
 * 
 */

/**
 * filter函数的使用
 * filter中的回调函数有一个要求:必须返回一个boolean值
 * true:当返回值为true时，函数内部会自动将这次回调的n加入到新的数组中
 * false:当返回false时，函数内部会过滤掉这次的n
 */

 //1.将数组中小于100的数取出
 let filterNums = nums.filter(function(n){
   return n < 100;
 })
 console.log(filterNums);



 /**
  * map函数的使用
  */
//  2.所有小于100 的数 *2
 filterNums = filterNums.map(function(n){
   return n*2;
 })

 console.log(filterNums);

 /**
  * reduce函数的使用
  * 
  */
//3.求和
let total = filterNums.reduce(function(preValue,n){
  return preValue + n;
},0)

console.log(total);