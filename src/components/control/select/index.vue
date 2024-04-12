<template>
  <el-select
  style="width: 100%"
    v-model="val"
    :placeholder="placeholder"
    @change="handlerChange"
    :multiple="multiple"
    :collapse-tags="multiple"
    clearable
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item[prop.label]"
      :value="item[prop.value]"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: {
      type: [String, Number, Array],
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
      options: [],
      //默认的prop
      prop: {
        label: 'label',
        value: 'value'
      },
    }
  },
  computed: {
    multiple() {
      return this.config?.isMultiple
    },
    placeholder() {
      return this.config?.placeholder || '请选择'
    },
  },
  watch: {
    value: {
      handler(newValue) {
        this.val = newValue
      },
      immediate: true
    },
    config: {
      handler(newValue) {
        this.initProps()
        this.initOptions()
      },
      immediate: true
    }
  },
  methods: {
    handlerChange() {
      this.$emit('update:value', this.val)
      this.config.callBack && this.config.callBack(this.val)
    },
    async getOptions(val) {
      try {
        const { data, code } = await this.$listeners.getOptionsData(val)
        if (code === 200) {
          // console.log(data);
          this.options = data
        }
      } catch (error) {
        console.log(error);
      }
    },
    initOptions() {
      if (this.config.isFetch) {
        this.getOptions(this.config.fetchName)
        return
      }
      const options = this.config.options
      if (options && Array.isArray(options) && options.length > 0) {
        this.options = options
      }
    },
    //处理options传入的值字段名对不上的问题
    initProps() {
      const options = this.config.props
      const keys = Object.keys(this.prop)
      if (options && Object.prototype.toString.call(options) === '[object Object]') {
        for (const key in options) {
          if (keys.includes(key)) {
            this.prop[key] = options[key]
          }
        }
      }
    },
  },
}
</script>

<style lang="sass" scoped>
</style>