<template>
  <div class="demo-content simple">
    <!--<v-title>Simple</v-title>-->
    <div class="v-row">
      <div v-for="(list, listName) in lists" class="v-col--auto">
        <div class="panel">
          <div class="panel__heading">
            <h3>List {{listName}}</h3>
            <h3>{{list}}</h3>

          </div>
          <div class="panel__body">
            <vddl-list class="panel__body--list"
                       :list="list"
                       :inserted="handleInserted"
                       :dragover="handleDragover"
                       :drop="handleDrop"
                       :horizontal="false">
              <vddl-draggable class="panel__body--item" v-for="(item, index) in list" :key="item.label"
                              :draggable="item"
                              :index="index"
                              :wrapper="list"
                              effect-allowed="move"

                              :selected="selectedEvent"
                              :dragstart="handleDragstart"
                              :dragend="handleDragend"
                              :canceled="handleCanceled"
                              :moved="handleMoved"
                              v-bind:class="{'selected': selected === item}">
                {{item.label}}
              </vddl-draggable>
              <vddl-placeholder class="red">Custom placeholder</vddl-placeholder>
            </vddl-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "drag",
    data() {
      return {
        "selected": null,
        "lists": {
          "A": [
            {
              "label": "Item A1"
            },
            {
              "label": "Item A2"
            },
            {
              "label": "Item A3"
            },
            {
              "label": "Item A4"
            },
            {
              "label": "Item A5"
            }
          ],
          "B": [
            {
              "label": "Item B1"
            },
            {
              "label": "Item B2"
            },
            {
              "label": "Item B3"
            },
            {
              "label": "Item B4"
            },
            {
              "label": "Item B5"
            }
          ],
          "C": [
            {
              "label": "Item C1"
            },
            {
              "label": "Item C2"
            },
            {
              "label": "Item C3"
            },
            {
              "label": "Item C4"
            },
            {
              "label": "Item C5"
            }
          ]
        },
      }

    },
    methods: {
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
    },
  }
</script>

<style scoped>
  /*.vddl-list, .vddl-draggable {*/
    /*position: relative;*/
  /*}*/
  /*.vddl-list {*/
    /*min-height: 44px;*/
  /*}*/
  /*.vddl-dragging{*/
    /*opacity: 0.7;*/
  /*}*/

  /*.vddl-dragging-source {*/
    /*display: none;*/
  /*}*/
</style>