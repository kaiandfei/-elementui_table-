<template>
  <div class="text">
    <el-input
      v-model="data[prop]"
      placeholder="请输入内容"
      @focus="focus"
      @blur="blur"
      :readonly="isEdit.readonly"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: 'Input',
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
  data() {
    return {
      isEdit: {
        border: 'none',
        readonly: true
      }
    }
  },
  methods: {
    focus(e) {
      this.isEdit = {
        border: '1px solid red',
        readonly: false
      }
    },
    blur(e) {
      this.isEdit = this.$options.data.call(this).isEdit
    }
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-input__inner {
  border: v-bind("isEdit.border");
}
</style>
