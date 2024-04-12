import { validatePhone } from '@/utils/validator';
import context from '@/main'
const createRules = (data) => {
  data.forEach(item => {
    let rulesArr = []
    //校验
    if (item.required) {
      const rule = { required: true, message: item.message || createMessage(item) }
      rulesArr.push(rule)
    }
    //校验手机号
    if (item.valueType && item.valueType === 'phone') {
      const rule = { validator: validatePhone, trigger: 'blur' }
      rulesArr.push(rule)
    }
    //是否有额外的校验规则
    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      rulesArr = rulesArr.concat(item.rules)
      // rulesArr = [...item.rules, ...rulesArr]
    }
    item.rules = rulesArr
  });
  return data
}
const createMessage = (data) => {
  let msg = ''
  switch (data.type) {
    case 'input':
      msg = context.$t('msg')
      break;
    case 'inputNumber':
      msg = '请输入'
      break;
    case 'select': case 'checkBox': case 'date': case 'upload':
      msg = '请选择'
      break;
  }
  return `${msg}${data.label}`
}
export default createRules