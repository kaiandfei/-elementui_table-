export const homeColumns = [{
  label: "姓名",
  prop: "name",
  sort: true,
  width:300
  // callback: (_data) => {
  //     // console.log(_data);
  //     return `<a href='https://baidu.com'>${_data.name}</a>`
  // }
},
{
  label: "图片",
  prop: "image",
  // render 事件
  renderHeader(h, { column }) {
    // h即为cerateElement的简写，具体可看vue官方文档
    return h("div", [
      h("span", column.label),
      h("i", {
        class: "el-icon-location",
        style: "color:#409eff;margin-left:5px;",
      }),
    ]);
  },
},
{
  label: "年龄",
  prop: "age",
  sort: "custom",
  sortBy: 'prop'
},
{
  type: "statusText",
  label: "性别",
  prop: "sex",
  width:300
},
{
  type: "tableInput",
  label: "学习",
  prop: "study",
  width:300
},
{
  type: "slot",
  label: "操作",
  prop: "option",
  slotName: "option",
},]