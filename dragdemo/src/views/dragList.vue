<template>
  <div>
    <vddl-list class="panel__body--list"
      :list="fromItems"
      :horizontal="false"
      :inserted="handleInserted"
      :dragover="handleDragover"
      :drop="handleDrop"
    >
      <vddl-draggable class="panel__body--item" v-for="(item,index) in fromItems" :key="item.id"
        :draggable="item"
        :index="index"
        :wrapper="fromItems"
        effect-allowed="move"

        :selected="selectedEvent"
        :dragstart="handleDragstart"
        :dragend="handleDragend"
        :canceled="handleCanceled"
        :moved="handleMoved"
        v-bind:class="{'selected': selected === item}"
      >
        {{item.label}}
      </vddl-draggable>
      <vddl-placeholder style="color:red">Custom placeholder</vddl-placeholder>
    </vddl-list>
    <div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dragCopy",
    data(){
      return{
        "selected": null,
        fromItems:[
          {
            id:1,
            label:'Item 1'
          },
          {
            id:2,
            label:'Item 2'
          },
          {
            id:3,
            label:'Item 3'
          },
          {
            id:4,
            label:'Item 4'
          },
          {
            id:5,
            label:'Item 5'
          }
        ]
      }
    },
    methods:{
      selectedEvent: function (item) {
        this.selected = item;
      },
      handleDragstart() {
        console.log(':v-draggable: dragstart');
      },
      handleDragend() {
        console.log(':v-draggable: dragend');
      },
      handleCanceled() {
        console.log(':v-draggable: canceled');
      },
      handleInserted() {
        console.log(':v-list: inserted');
      },
      handleDrop(data) {
        console.log(':v-list: drop');
        console.log(data);
        const {index, list, item} = data;

        //change id *(:key="item.id" 根据id插入)
        item.id = new Date().getTime();

        list.splice(index, 0, item);
      },
      handleMoved(item) {
        console.log(':v-draggable: moved');
        console.log(item);
        const {index, list} = item;
        list.splice(index, 1);
      },
      handleDragover() {
        console.log(':v-list: handleDragover');
      },

    }
  }
</script>

<style scoped>

</style>
