<template>
  <div class="com-container">
    <!-- 操作面板 -->
    <div class="panel">
      <grid-layout
        :layout.sync="layout"
        :col-num="3"
        :row-num="3"
        :row-height="100"
        :is-draggable="true"
        :is-resizable="false"
        :vertical-compact="false"
        :margin="[20, 24]"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="(item, index) in layout"
          :key="index"
          :item="watchitem(item)"
          :static="item.static"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          @move="moveEvent"
          @moved="movedEvent"
          class="gridItem"
        >
          <span class="text">{{ item.i }}</span>
        </grid-item>
      </grid-layout>
    </div>
    <!-- 组件列表 -->
    <WidgetList :list="widgetList" @onMousedown="onMousedown" />
  </div>
</template>

<script>
import WidgetList from "@/components/widgetList";
import { WIDGETLIST } from '@/constents/config.js'

import { GridLayout, GridItem } from 'vue-grid-layout'
var historyLayout = [
  { "x": 0, "y": 0, "w": 1, "h": 1, "i": "0", static: false },
  { "x": 1, "y": 0, "w": 1, "h": 1, "i": "1", static: false },
  { "x": 2, "y": 0, "w": 1, "h": 1, "i": "2", static: false },
  { "x": 3, "y": 0, "w": 1, "h": 1, "i": "3", static: false },
  { "x": 4, "y": 0, "w": 1, "h": 1, "i": "4", static: false },
  { "x": 5, "y": 0, "w": 1, "h": 1, "i": "5", static: false },
  { "x": 6, "y": 0, "w": 1, "h": 1, "i": "6", static: false },
  { "x": 7, "y": 0, "w": 1, "h": 1, "i": "7", static: false },
  { "x": 0, "y": 1, "w": 1, "h": 1, "i": "8", static: false },
  { "x": 1, "y": 1, "w": 1, "h": 1, "i": "9", static: false },
  { "x": 2, "y": 1, "w": 1, "h": 1, "i": "10", static: false },
  { "x": 3, "y": 1, "w": 1, "h": 1, "i": "11", static: false },
  { "x": 4, "y": 1, "w": 1, "h": 1, "i": "12", static: false },
  { "x": 5, "y": 1, "w": 1, "h": 1, "i": "13", static: false },
  { "x": 6, "y": 1, "w": 1, "h": 1, "i": "14", static: false },
  { "x": 7, "y": 1, "w": 1, "h": 1, "i": "15", static: false },
  { "x": 0, "y": 2, "w": 1, "h": 1, "i": "16", static: false },
  { "x": 1, "y": 2, "w": 1, "h": 1, "i": "17", static: false },
  { "x": 2, "y": 2, "w": 1, "h": 1, "i": "18", static: false },
  { "x": 3, "y": 2, "w": 1, "h": 1, "i": "19", static: false }
];
export default {
  components: {
    WidgetList,
    GridLayout, GridItem
  },
  data() {
    return {
      currentWidget: null,
      widgetList: WIDGETLIST,
      layout: [
        { "x": 0, "y": 0, "w": 1, "h": 1, "i": "0", static: false },
        { "x": 1, "y": 0, "w": 1, "h": 1, "i": "1", static: false },
        { "x": 2, "y": 0, "w": 1, "h": 1, "i": "2", static: false },
        { "x": 3, "y": 0, "w": 1, "h": 1, "i": "3", static: false },
        { "x": 4, "y": 0, "w": 1, "h": 1, "i": "4", static: false },
        { "x": 5, "y": 0, "w": 1, "h": 1, "i": "5", static: false },
        { "x": 6, "y": 0, "w": 1, "h": 1, "i": "6", static: false },
        { "x": 7, "y": 0, "w": 1, "h": 1, "i": "7", static: false },
        { "x": 0, "y": 1, "w": 1, "h": 1, "i": "8", static: false },
        { "x": 1, "y": 1, "w": 1, "h": 1, "i": "9", static: false },
        { "x": 2, "y": 1, "w": 1, "h": 1, "i": "10", static: false },
        { "x": 3, "y": 1, "w": 1, "h": 1, "i": "11", static: false },
        { "x": 4, "y": 1, "w": 1, "h": 1, "i": "12", static: false },
        { "x": 5, "y": 1, "w": 1, "h": 1, "i": "13", static: false },
        { "x": 6, "y": 1, "w": 1, "h": 1, "i": "14", static: false },
        { "x": 7, "y": 1, "w": 1, "h": 1, "i": "15", static: false },
        { "x": 0, "y": 2, "w": 1, "h": 1, "i": "16", static: false },
        { "x": 1, "y": 2, "w": 1, "h": 1, "i": "17", static: false },
        { "x": 2, "y": 2, "w": 1, "h": 1, "i": "18", static: false },
        { "x": 3, "y": 2, "w": 1, "h": 1, "i": "19", static: false }
      ],
      draggable: true,
      resizable: true,
      index: 0,
      newX: 0,
      newY: 0,
      curBox: '',
    };
  },
  created() {

  },
  mounted() {

  },
  methods: {
    watchitem(item) {
      if (this.curBox != item.i) {
        for (let j = 0; historyLayout[j] != undefined; j++) {
          if (historyLayout[j].i == item.i) {
            item.x = historyLayout[j].x
            item.y = historyLayout[j].y
          }
        }
      }
      return item
    },
    moveEvent(i) {
      this.curBox = i
    },
    movedEvent(i, newX, newY) {
      for (let j = 0; historyLayout[j] != undefined; j++) {
        if (historyLayout[j].i == i) {
          this.newX = historyLayout[j].x
          this.newY = historyLayout[j].y
          historyLayout[j].x = newX
          historyLayout[j].y = newY
        }
      }
      for (let j = 0; historyLayout[j] != undefined; j++) {
        if (i != historyLayout[j].i && historyLayout[j].x === newX && historyLayout[j].y === newY) {
          historyLayout[j].x = this.newX
          historyLayout[j].y = this.newY
        }
      }
    },
    onMousedown(e, item) {
      this.currentWidget = item
      console.log('111', this.currentWidget);
    },
  },
}
</script>

<style lang="scss" scoped>
.com-container {
  width: 100vw;
  height: calc(100vh - 81px);
  display: flex;
  justify-content: space-between;
}
.panel {
  flex: 1;
  // display: flex;
  padding: 20px;
  background-color: pink;
  .gridItem {
    border: solid black 1px;
    background-color: #cccccc;
  }
}
</style>