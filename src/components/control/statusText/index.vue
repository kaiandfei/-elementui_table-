<template>
  <div class="statusText">{{ data[prop] }}</div>
</template>

<script>
export default {
  name: 'StatusText',
  props: {
    prop: {
      type: String,
      default: ""
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    color() {
      return  this.data[this.prop]==='女'?'red':'pink'
    }
  },
};
</script>

<style lang="scss" scoped>
.statusText {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color:v-bind(color)
}
</style>
