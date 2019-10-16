# vuex学习
- state
  - vuex数据源，我们需要保存的数据就保存在这里，可以在页面中通过
  this.$store.state来获取我们定义的数据
  ```
  state:{
        count:1
      },
  
  this.$store.state.count
      
  ```
- getters
    - 相当于vue中的computed计算属性，getter返回值会根据它依赖被缓存起来
    且只有当它的依赖值发生改变才会被重新计算，getters可以用于监听
    state中值的变化，返回计算后的结果
    
    ```
    getters:{
          getStateCount:function (state) {
            return state.count+1;
          }
        },
    ```
- mutations
    - 数据在页面中获取到了，要修改state中值唯一的方法就是提交
    mutation来修改
    
    ```
    //vue文件
     <button @click="addFun" >+</button>
     <button @click="reductionFun" >-</button>
     
     
     methods:{
        addFun(){
            this.$store.commit('add');//同步
        },
        reductionFun(){
            this.$store.commit('reduction');//同步
        }
     }
     
     //store/store.js
     mutations:{
           add(state){
             state.count++;
           },
           reduction(state){
             state.count--;
           }
     },
    ```
- actions
    - 官方建议我们去提交一个actions,在actions中提交mutation
    再去修改state中的值
    
    ```
        //vue文件
        <button @click="addFun" >+</button>
        <button @click="reductionFun" >-</button>
        
        methods:{
              addFun(){
                this.$store.dispatch("addFun");
              },
              reductionFun(){
                this.$store.dispatch('reductionFun');
              }
        }
        
        //store/store.js文件
        actions:{
              addFun(context){//接收一个store实例具有相同方法的属性context对象
                context.commit('add');
              },
              reductionFun(context){
                context.commit('reduction');
              }
        }
        
    ```

# storedemo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
