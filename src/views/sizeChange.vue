<template>
  <div class="com-container">
    <!-- 操作面板 -->
    <div
      class="panel"
      @dragover="(e) => e.preventDefault()"
      @drop="(e) => onDrop(e, list)"
    >
      <VueDragResize
        class="com-box"
        v-for="item in list"
        :key="item.id"
        :parentLimitation="false"
        @resizing="resize1"
      >
        我是新来的{{ item.label }}
      </VueDragResize>
    </div>
    <!-- 组件列表 -->
    <WidgetList :list="widgetList" @onMousedown="onMousedown" />
  </div>
</template>

<script>
import WidgetList from "@/components/widgetList";
import { WIDGETLIST } from '@/constents/config.js'
import VueDragResize from 'vue-drag-resize'
let currentId = 0;
export default {
  components: {
    VueDragResize,
    WidgetList
  },
  data() {
    return {
      list: [],
      widgetList: WIDGETLIST
    };
  },
  created() {

  },
  mounted() {

  },
  methods: {
    onDrop(e, arr) {
      // arr.splice(0, 1, {
      //   id: 1,
      //   label: this.currentWidget.label,
      // })
      arr.push({
        id: currentId++,
        label: this.currentWidget.label,
      })
      console.log('123', e, arr)
    },
    onMousedown(e, item) {
      this.currentWidget = item
      console.log('111', e,item);
    },
    resize1(e) {

      console.log('resize', e);
    }
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
  display: flex;
  padding: 20px;
  background-color: pink;
  position: relative;
  .com-box {
    background-color: aqua;
  }
}
</style>