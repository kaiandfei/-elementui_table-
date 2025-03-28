// import Mock from 'mockjs'
import {basketballData,studyData,classData,characterData,carData} from './mockData'
// const projectList = Mock.mock({
//     "list|20": [{
//     'name': '@cname', // 中文名
//     'account': `@word`, // 英文单词
//     'phone': /1[3-9][0-9]{9}/, // 正则模式
//     'deptName': Mock.mock('@cword(2,4)'), // 随机2-4字中文单词
//     'id': '@guid', // guid
//    }]
//  })
 export const responseList =  [
    {
        url: '/getBasketballData',
        type: 'post',
        response: (res) => {
            // console.log(res);
            return {
                code: 200,
                message: "成功",
                data: basketballData
            }     
            // 使用return返回前端需要的数据
        }
    },
    {
        url: '/getStudyData',
        type: 'post',
        response: (res) => {
            // console.log(res);
            return {
                code: 200,
                message: "成功",
                data: studyData
            }     
            // 使用return返回前端需要的数据
        }
    },
    {
        url: '/getClassData',
        type: 'post',
        response: (res) => {
            // console.log(res);
            return {
                code: 200,
                message: "成功",
                data: classData
            }     
            // 使用return返回前端需要的数据
        }
    },
    {
        url: '/getCharacterData',
        type: 'post',
        response: (res) => {
            // console.log(res);
            return {
                code: 200,
                message: "成功",
                data: characterData
            }     
            // 使用return返回前端需要的数据
        }
    },
    {
        url: '/getCarData',
        type: 'post',
        response: (res) => {
            // console.log(res);
            return {
                code: 200,
                message: "成功",
                data: carData
            }     
            // 使用return返回前端需要的数据
        }
    },
]