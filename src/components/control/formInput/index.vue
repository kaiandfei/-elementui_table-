<template>
  <el-input
    v-model="val"
    clearable
    :type="type"
    :disabled="disabled"
    :show-password="showPassword"
    :placeholder="placeholder"
    :suffix-icon="suffixIcon"
    :prefix-icon="prefixIcon"
    :rows="rows"
    :autosize="autosize"
    @input="handleInput"
  >
  </el-input>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      val: ''
    }
  },
  computed: {
    type() {
      return this.config?.textareaType || 'input'
    },
    disabled() {
      return this.config?.disabled || false
    },
    showPassword() {
      return this.config?.showPassword || false
    },
    placeholder() {
      return this.config?.placeholder || '请输入'
    },
    suffixIcon() {
      return this.config?.suffixIcon
    },
    prefixIcon() {
      return this.config?.prefixIcon
    },
    rows() {
      return this.config?.rows
    },
    autosize() {
      return this.config?.autosize
    },
  },
  watch: {
    value: {
      handler(newValue) {
        this.val = newValue
      },
      immediate: true
    }
  },
  methods: {
    handleInput() {
      this.$emit('update:value', this.val)
    }
  },
}
</script>

<style lang="sass" scoped>
</style>