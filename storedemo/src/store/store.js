import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      count:1
    },
    getters:{
      getStateCount:function (state) {
        return state.count+1;
      }
    },
    mutations:{
      add(state){
        state.count++;
      },
      reduction(state){
        state.count--;
      }
    },
    actions:{
      addFun(context){//接收一个store实例具有相同方法的属性context对象
        context.commit('add');
      },
      reductionFun(context){
        context.commit('reduction');
      }
    }
})
