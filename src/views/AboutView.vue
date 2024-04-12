<template>
  <div>
    <com-form
      :item="formItem"
      :field.sync="formField"
      :button="formButton"
      @getOptionsData="getOptionsData"
      @beforeSubmit="submit"
    >
    </com-form>
  </div>
</template>

<script>
import { studyData, classData, characterData, carData } from "@/request/api/api";
import { aboutForm } from '@/config/formConfig';
export default {
  name: "AboutForm",
  data() {
    return {
      formField: aboutForm.formField,
      formItem: aboutForm.formItem,
      formButton: aboutForm.formButton,
    }
  },
  methods: {
    //表单提交事件
    submit(data) {
      console.log(data);
    },
    //获取异步下拉框数据
    getOptionsData(val) {
      let params = {
        a: '1'
      }
      // console.log(val);
      if (val === 'studyData') {
        params['b'] = '2'
        return studyData(params)
      }
      if (val === 'classData') {
        return classData(params)
      }
      if (val === 'characterData') {
        return characterData(params)
      }
      if (val === 'carData') {
        return carData(params)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>