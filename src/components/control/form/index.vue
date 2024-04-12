<template>
  <div>
    <el-form ref="form" :model="field" label-width="80px">
      <template v-for="item in formItem">
        <el-form-item
          :key="item.prop"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <slot v-if="item.solt === 'solt'" :name="item.solt_name"></slot>
          <component
            ref="componentRef"
            v-else
            :is="item.type === 'input' ? 'com-formInput' : `com-${item.type}`"
            :config="item"
            :value.sync="field[item.prop]"
            v-bind="$attrs"
            v-on="$listeners"
          />
        </el-form-item>
      </template>
      <el-form-item v-if="button.length > 0">
        <el-button
          :type="item.type"
          v-for="item in button"
          :key="item.key"
          @click="handlerButton(item)"
          >{{ item.label }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import createRules from "./createRules";
export default {
  name: 'Form',
  props: {
    item: {
      type: Array,
      default: () => []
    },
    button: {
      type: Array,
      default: () => []
    },
    field: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      formItem: [],
    }
  },
  mounted() {
    this.formItem = createRules(this.item)
    // console.log(this.formItem);
  },
  methods: {
    handlerButton(data) {
      if (data.key === 'submit') this.submit(this.field)
      if (data.key === 'cancel') this.cancel()
      data.callBack && data.callBack(data)
    },
    submit(data) {
      this.formItem.forEach((item, index) => {
        if (item.type === 'upload') {
          data.file = this.$refs.componentRef[index].fileListData
        }

      })
      this.$emit('beforeSubmit', data)
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$emit('beforeSubmit', data)
        } else {
          return false;
        }
      });
    },
    cancel() {
      this.$refs['form'].resetFields();
    },
  }
}
</script>

<style lang="scss" scoped>
</style>