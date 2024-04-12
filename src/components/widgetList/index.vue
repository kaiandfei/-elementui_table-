<template>
  <div class="widget-list">
    <div
      v-for="widgetItem in list"
      :key="widgetItem.type"
      class="widget"
      draggable="true"
      @mousedown="(e) => $emit('onMousedown', e, widgetItem)"
    >
      {{ widgetItem.label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
  },

}
</script>

<style lang="scss" scoped>
.widget-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 20%;
  background-color: aqua;
  .widget {
    width: 100px;
    height: 100px;
    margin: 0 20px;
    background-color: aquamarine;
  }
}
</style>