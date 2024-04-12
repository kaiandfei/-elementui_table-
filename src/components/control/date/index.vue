<template>
  <el-date-picker
    style="width: 100%"
    v-model="val"
    :type="config.model"
    :placeholder="config.placeholder || '选择日期时间'"
    :start-placeholder="config.startPlaceholder || '选择开始日期时间'"
    :end-placeholder="config.endPlaceholder || '选择结束日期时间'"
    :range-separator="config.rangeSeparator || '-'"
    :picker-options="pickerOptions()"
    @change="handlerChange"
  >
  </el-date-picker>
</template>

<script>
export default {
  name: 'Date',
  props: {
    value: {
      type: [String, Date, Array],
      default: ''
    },
    config: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      val: '',

    }
  },
  watch: {
    value: {
      handler(newValue) {
        // console.log('12213', newValue)
        this.val = newValue
      },
      immediate: true
    },
  },
  methods: {
    handlerChange() {
      this.$emit('update:value', this.val)
    },
    pickerOptions() {
      const disabledDate = this.config.disabledDate
      const disabledToday = this.config.disabledToday
      const disabledRules = this.config.disabledDateRule && Object.prototype.toString.call(this.config.disabledDateRule) === '[object Function]'
      return {
        disabledDate: (date) => {
          if (disabledRules) { //自定义配置禁用日期
             return this.config.disabledDateRule(date)
          } else if (disabledDate) {//禁用当天之前的日期
            return date.getTime() < new Date() - 8.64e7
          } else if (disabledToday) {//禁用当前及之前
            return date.getTime() < new Date()
          } else {
            return
          }
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
</style>