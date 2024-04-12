//校验手机号
const reg = /^1[3456789]\d{9}$/
export function validatePhone(rule, value, callback) {
  if (reg.test(value)) {
    callback();
  } else if (value === '') {
    callback(new Error('手机号不能为空'));
  } else {
    callback(new Error('请输入正确的手机号'));
  }
}