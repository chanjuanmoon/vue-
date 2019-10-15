<template>
  <div>
      <!--list-->
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
      <!--add Item-->
      <vddl-draggable class="button"
        :draggable="itemAdd"
        :copied="copied"
        effect-allowed="copy"
      >
        Add Item
      </vddl-draggable>
      <div style="width:400px;margin:0 auto;">
        {{fromItems}}
      </div>
  </div>
</template>

<script>
  export default {
    name: "dragCopy",
    data(){
      return{
        "selected": null,
        itemAdd:{label:'Item Add',id:10},
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
      copied(item){
        item.id++;
      },
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
  .panel__body--list {
    width:400px;
    background: #fff;
    margin-bottom:20px;
  }
  .panel__body--item, .panel__body .panel__placeholder {
    width: 100%;
    min-height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    padding: 0 15px;
    background: orange;
    box-sizing: border-box;
  }

  .panel__body--item.no-padding-left {
    padding-left: 0
  }

  .panel__body--item:last-child {
    border-bottom: none
  }

  .panel__body--item > .panel {
    margin: 15px 0
  }

  .panel .panel__placeholder {
    background: #f5f5f5
  }

  .panel.panel--info .panel__body {
    padding: 25px
  }
  .button{
    width:100px;
    border: 1px solid #42B983;
    text-align: center;
    height: 40px;
    border-radius: 4px;
    line-height: 40px;
    background-color: #42B983;
    color: #fff;
    cursor: move;
    font-size: 14px;
  }

</style>
