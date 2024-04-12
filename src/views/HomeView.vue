<template>
  <div class="home">
    <el-button type="primary" @click="handleDebounceClick">防抖</el-button>
    <el-button type="text" @click="handleThrottleClick" v-preventReClick
      >节流</el-button
    >
    <el-button type="text" @click="handleEdit">批量编辑</el-button>
    <com-table
      ref="table"
      id="table"
      :column="column"
      stripe
      border
      selection
      :check-list.sync="checkList"
      :format="format"
      :getTableList="basketballData"
    >
      <template v-slot:option="slot">
        <el-button type="text" @click="handleEdit(slot.data)">编辑</el-button>
      </template>
    </com-table>
    <el-button type="text" @click="handleExport">导出</el-button>
    <div v-copy.icon>复制</div>
    <div v-copy>单击复制</div>
    <div v-copy.dblclick>双击复制</div>

    <div v-screenfull.icon>全屏</div>
    <br />
    <br />
    <br />
    <div
      style="width: 100px; height: 100px; backgroundcolor: pink; margin: 10px"
      v-expandClick="(20, 30, 40, 50)"
      @click="handleClick"
    >
      点击范围扩大
    </div>
    <div class="testCon">
      <div class="test" id="test">test</div>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import { basketballData } from "@/request/api/api";
import { debounce, throttle } from '../../../防抖/index';
import { homeColumns } from '@/config/tableConfig';
import vue from 'vue';
export default {
  name: "HomeView",
  data() {
    return {
      column: homeColumns,
      checkList: [],
      show: false
    };
  },
  created() {
    console.log('qqqqweqdasd54984449',this.$refs.table)
    this.$nextTick(() => {
      console.log(155555555555,this.$refs.table)
    })
    let a = 1;
    let b = 2;
    let c = 3;
    c = a;
    a = b;
    b = c;
    console.log(a, b, c);
    let newNum = '10.0'.toString().match(/^\d+(?:\.\d{0,2})?/)[0]; console.log(newNum)
    this.twoNumAdd([8, 4, 1, 3, 5, 6, 2], 7)
    const arr = [[1, 2], [3, 4, 5], [[6, 7, [8, 9, 10]], [11, 12, 13], [14]]]
    // 输出 [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    console.log(this.flattenArray(arr))

    let msg = undefined
    // 以前的做法
    // msg = msg || 'default value'
    // 现在的做法
    msg ||= 'default value'
    console.log(2121221, msg);

    let str = 2
    str ??= 'str'
    console.log(6666666666, str);
    console.log(6666666666, +0 === -0);
    console.log(6666666666, Object.is(+0, -0));
    console.log(6666666666, NaN === NaN);
    console.log(6666666666, Object.is(NaN, NaN));
    (() => {
      console.log('qweq', this, vue)
    })()
    function name() {
      console.log('qweaaq', this)
    }
    let asd = new name()
    // name()
    let obj = {
      0: 'one',
      1: 'two',
      length: 2
    };
    let resarr = [{
      name: 'sunkai',
      age: 18
    }]
    obj = Array.from(obj)
    console.log('wqe', obj)
    for (var key of obj) {
      console.log('asdasfa', key)
    }

    let text = String.fromCodePoint(0x20BB7);

    for (let i = 0; i < text.length; i++) {
      console.log(text[i]);
    }
    // " "
    // " "

    for (let i of text) {
      console.log(i);
    }
    let arr1 = [1, 2, 3, 4, 5]
    delete arr1[0]
    console.log(arr1)
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        console.log('123131',i)
      }, 1000);
    }
  },
  methods: {
    flattenArray(list) {
      return list.reduce((result, cur) => {
        if (Array.isArray(cur)) {
          return [...result, ...this.flattenArray(cur)];
        } else {
          return [...result, cur];
        }
      }, []);
    },
    handleEdit(_row = null) {
      if (this.checkList.length !== 0) {
        console.log(this.checkList);
      } else {
        console.log(_row);
      }
    },
    basketballData() {
      return basketballData();
    },
    format(_data) {
      return _data;
    },
    test() {
      console.log('1231321')
    },

    handleDebounceClick: debounce(function () {
      console.log('324141')
    }, 2000),
    handleThrottleClick: throttle(function () {
      console.log('111111')
    }, 3000),

    async handleExport() {
      console.log(this.$refs.table)
      await this.$refs.table.getTableData();
      let that = this
      let id = document.querySelector('#table');
      console.log(id);
      // console.log(imgHeight,imgWidth);
      html2canvas(id, {
        useCORS: true, //允许跨域
        backgroundColor: '#ececec', //画布背景色，设置null为透明
        scale: 2, // 处理模糊问题
        dpi: 300, // 处理模糊问题
      }).then((canvas) => {
        // console.log(canvas);
        // 返回一个 canvas 对象，在dom中渲染 canvas 对象
        // 转化成 dataurL
        let url = canvas.toDataURL("image/png");
        // console.log(url);
        that.imgUrl = url;
        //调用下载方法
        let a = document.createElement("a"); //创建一个a标签
        a.download = "海报.png"; // 设置图片名称
        a.href = that.imgUrl; // 将生成的URL设置为a.href属性
        a.click();
      });
    },

    handleClick() {
      console.log(123)
    },
    twoNumAdd(arr, target) {
      if (Array.isArray(arr)) {
        // 使用map将遍历过的数字存起来，空间换时间
        let map = {};
        // this.twoNumAdd([8, 2, 6, 5, 4, 1, 3] ,7)
        for (let i = 0; i < arr.length; i++) {
          // 从map中查找是否有key 等于 target-nums[i]，如果有，则条件成立，返回结果
          if (map[target - arr[i]] !== undefined) {
            console.log('111', [target - arr[i], arr[i]])
            return [target - arr[i], arr[i]];
          } else {
            // 条件不成立，将该值存起来
            map[arr[i]] = i;
          }
        }
      }
      return []
    }
  },
};
</script>
<style>
@import url("./test.scss");
/* a{
  opacity: 0;
} */
#table {
  width: 600px;
  /* margin-left: -10000px;
  position: fixed; */
}
.testCon {
  display: flex;
}
.test {
  width: 10%;
  height: 10vw;
  background-color: yellow;
  margin: 10px;
  resize:inherit;
  resize: initial;
}
</style>