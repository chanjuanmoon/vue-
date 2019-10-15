<template>
  <div>
    <h2>从页面直接获取：{{this.$store.state.count}}</h2>
    <h2>从getters获取：{{this.$store.getters.getStateCount}}</h2>


    <p style="color:red">count的值:{{this.$store.state.count}}</p>
    <button @click="addFun" >+</button>
    <button @click="reductionFun" >-</button>
  </div>
</template>

<script>
  export default {
    name: "testStore",
    methods:{
      addFun(){
        this.$store.dispatch("addFun");
      },
      reductionFun(){
        this.$store.dispatch('reductionFun');
      }
    }
  }
</script>

<style scoped>
button{
  font-size: 22px;
  margin-right:20px;
  padding:10px;
}
</style>
