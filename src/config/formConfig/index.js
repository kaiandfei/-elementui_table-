export const aboutForm = {
  formItem: [{
    type: 'input',            //表示文本框类型
    label: '姓名',
    prop: 'name',
    required: true,           //是否必填
    // message: '请输入你的姓名', //可配置自定义提示，不配置有默认的提示语
    rules: [{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],//可自定义rules规则
    // disabled: true,            //是否禁用
  }, {
    type: 'input',
    valueType: 'phone',
    label: '手机号',
    prop: 'phone',
    required: true,
  }, {
    type: 'input',
    textareaType: 'textarea',
    label: '描述',
    prop: 'desc',
    required: true,
  }, {
    type: 'select',
    label: '性别',
    prop: 'sex',
    required: true,
    //匹配下方options每一项的key,如果key是label和value就不用配置
    props: {
      label: 'name',
    },
    options: [{
      value: 0,
      name: '女'
    }, {
      value: 1,
      name: '男'
    },]
  }, {
    //异步获取下拉框数据
    type: 'select',
    label: '学习',
    prop: 'study',
    required: true,
    isFetch: true,
    fetchName:'studyData',
    isMultiple: true,
    props: {
      label: 'course',
      value: 'id'
    },
    callBack: (data) => {
      console.log(data);
      // location.href='https://www.baidu.com/'
      // console.log(data);
    }
  },{
    //异步获取下拉框数据
    type: 'select',
    label: '班级',
    prop: 'class',
    required: true,
    isFetch: true,
    fetchName:'classData',
    isMultiple: true,
    props: {
      label: 'className',
      value: 'id'
    },
  },{
    //异步获取多选框数据
    type: 'checkBox',
    label: 'NBA球星',
    prop: 'character',
    required: true,
    isFetch: true,
    fetchName:'characterData',
    props: {
      label: 'characterName',
      value: 'id'
    },
  },{
    //异步获取单选框数据
    type: 'radio',
    label: '交通工具',
    prop: 'car',
    required: true,
    isFetch: true,
    fetchName:'carData',
    props: {
      label: 'carName',
      value: 'id'
    },
  },{
    //时间数据
    type: 'date',
    label: '创建时间',
    prop: 'createTime',
    required: true,
    model:'datetimerange',//日期选择器类型
    rangeSeparator:'至',//中间分割符
    // disabledDateRule:(time) =>{ //自定义禁用时间规则
    //   return time.getTime() > new Date();
    // },
    // disabledDate:true,//禁用当天之前的日期
    disabledToday:true,//禁用当天
    startPlaceholder:'',//开始时间提示
    endPlaceholder:'',//结束时间提示
    placeholder:'',//提示
  },{
    //文件上传数据
    type: 'upload',
    label: '文件',
    prop: 'file',
    required: true,
    model:'card',
    fileSize:1,
    multiple:true,
    action:'https://wisdomlabapidev.swrtest.com/swrserveadmin/OssImage/uploadImage',
    data:{token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDcsInNjaG9vbF9pZCI6Mzg4LCJwaG9uZSI6IjEzMzEyMzEzMTMxIiwic2Nob29sX2NvZGUiOiIwMjkiLCJ1c2VybmFtZSI6IuaglumcnuagoeeuoeeQhjEiLCJsb2dpbl9uYW1lIjoicXgwMTEiLCJwaGFzZV9zdHVkeV9pZCI6IjMiLCJzdWJqZWN0X2lkIjowLCJyb2xlX2lkIjoxLCJhcmVhX2xldmVsIjozLCJwcm8iOjEyNDMxLCJjaXR5IjoxMjQzMiwiYXJlYSI6MTI0OTUsImhlYWRwb3J0cmFpdCI6Imh0dHBzOi8vd2lzZG9tbGFiLm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb20vaW1hZ2UvMjAyMzEyMDYvMTcwNTM1NzkwLnBuZyIsInN0YXR1cyI6MSwic2Nob29sX3llYXIiOiIyMDIzLTIwMjQiLCJzZW1lc3RlciI6MSwid2VlayI6MTUsImJlZ2luX3RpbWUiOiIyMDIzLTA5LTAxIiwid2Vla251bSI6MTgsInNjaG9vbCI6eyJpZCI6Mzg4LCJuYW1lIjoi6L-I55qL5qGl5Yid57qn5Lit5a2mMjnkuK0iLCJjb2RlIjoiMDI5Iiwic2Nob29sX3R5cGVfaWQiOjMsImxvZ28iOiJodHRwczovL3dpc2RvbWxhYi5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL2ltYWdlLzIwMjMxMDE5LzEwNTM2NDA4OC5wbmciLCJjaXR5IjoxMjQzMiwicHJvIjoxMjQzMSwiYXJlYSI6MTI0OTUsImluc3RydW1lbnRfc3RhbmRhcmQiOjMsImxhYl9zdGFuZGFyZCI6MywiaXNfb3BlbiI6MSwidXNlX3N0YXJ0X3RpbWUiOm51bGwsInVzZV9lbmRfdGltZSI6bnVsbCwibGVuIjoiMyIsImd1aSI6IjUiLCJwaGFzZV9zdHVkeV9pZCI6IjMifSwicm9sZV9uYW1lIjoi5a2m5qCh566h55CG5ZGYIiwicHJvbmFtZSI6Iuaxn-iLj-ecgSIsImNpdHluYW1lIjoi5Y2X5Lqs5biCIiwiYXJlYW5hbWUiOiLmoJbpnJ7ljLoiLCJiZWxvbmdfYXJlYSI6IuaglumcnuWMuiIsImJlbG9uZ19sZXZlbCI6MTI0OTUsImNsYXNzIjpbXSwiZ3JhZGUiOltdLCJhdWQiOiIiLCJleHAiOjE3MDE5Mzk4NzIsImlhdCI6MTcwMTkzMjY3MiwiaXNzIjoiIiwianRpIjoiODA5Zjg4MDNkMzI4NTM4NWJiMDAxZmZjZDQ3MDYyYzgiLCJuYmYiOjE3MDE5MzI2NzIsInN1YiI6IiJ9.WbI5CdmK7nz92Ip4DENIVs3Ezcxyvr9hcW_AWDq0QIs'}
  },], 
  formField: {
    name: 'sun',
    phone: '',
    desc: '',
    sex: '',
    study: [],
    class: [],
    character: [1],
    car: 1,
    createTime:'',
    file:[]
  },
  formButton: [{
    label: '确定',
    key: 'submit',
    type: 'primary',
  }, {
    label: '取消',
    key: 'cancel',
  }, {
    label: '下一步',
    key: 'next',
    type: 'primary',
    callBack: (data) => {
      location.href='https://www.baidu.com/'
      // console.log(data);
    }
  },]
}