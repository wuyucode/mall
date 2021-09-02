<template>
    <div id="goodsSpec">
        <el-table
                :data="specTable"
                :span-method="spanMethod"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="specName"
                    label="属性分类名称"
                    width="180"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="propName"
                    label="详细属性名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="propValue"
                    label="详细属性数值"
                    width="180">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "goodsSpec",
        components: {},
        props: ['id'],
        data() {
            return {
                specTable:[],
                spanArr:[],
                pos: 0
            }
        },
        mounted() {
            let specTable = [
                { specName: '主体', propName: '产品名称', propValue: 'iPhone 11'},
                { specName: '主体', propName: '首销日期', propValue: '以官网信息为准'},
                { specName: '主体', propName: '品牌', propValue: 'Apple'},
                { specName: '主体', propName: '上市年份', propValue: '2019年'},
                { specName: '主体', propName: '上市月份', propValue: '9月'},
                { specName: '主体', propName: '入网型号', propValue: 'A2223'},

                { specName: '基本信息', propName: '机身宽度（mm）', propValue: '75.7'},
                { specName: '基本信息', propName: '运营商标志或内容', propValue: '无标志或内容'},
                { specName: '基本信息', propName: '机身材质', propValue: '玻璃搭配铝金属设计'},
                { specName: '基本信息', propName: '机身材质分类', propValue: '玻璃后盖'},
                { specName: '基本信息', propName: '机身重量（g）', propValue: '194'},
                { specName: '基本信息', propName: '机身厚度(mm)', propValue: '8.3'},
                { specName: '基本信息', propName: '机身长度（mm）', propValue: '150.9'},

                { specName: '主芯片', propName: 'CPU品牌', propValue: '以官网信息为准'},

                { specName: '屏幕', propName: '屏幕材质类型', propValue: 'LCD'},
                { specName: '屏幕', propName: '屏幕像素密度', propValue: '326'},
                { specName: '屏幕', propName: '主屏幕尺寸', propValue: '6.1英寸'},

                { specName: '后置摄像头', propName: '后摄主摄光学防抖', propValue: '支持光学防抖'},
                { specName: '后置摄像头', propName: '闪光灯', propValue: '其他闪光灯'},
                { specName: '后置摄像头', propName: '拍照特点', propValue: '数码变焦；光学防抖；HDR'},
                { specName: '后置摄像头', propName: '后摄主摄光圈', propValue: 'f/2.4'},

                { specName: '前置摄像头', propName: '拍照特点', propValue: '人像模式；HDR'},
                { specName: '前置摄像头', propName: '前摄主摄光圈', propValue: 'f/2.2'},

                { specName: '电池信息', propName: '电池可拆卸', propValue: '不可拆卸'},
                { specName: '电池信息', propName: '无线充电', propValue: '支持无线充电'},
                { specName: '电池信息', propName: '充电器', propValue: '其他'},

                { specName: '网络支持', propName: 'SIM卡类型', propValue: 'Nano SIM'},
                { specName: '网络支持', propName: '3G/2G网络', propValue: '3G TD-SCDMA(移动)；3G WCDMA(联通)；3G CDMA2000(电信)；2G GSM(移动/联通)；2G CDMA(电信)'},
                { specName: '网络支持', propName: '4G网络', propValue: '4G FDD-LTE(联通)；4G TD-LTE(移动)；4G FDD-LTE(联通、电信)'},
                { specName: '网络支持', propName: '网络频率(2G/3G)', propValue: '以官网信息为准'},
                { specName: '网络支持', propName: '双卡机类型', propValue: '双卡双待'},
                { specName: '网络支持', propName: '最大支持SIM卡数量', propValue: '2个'},
                { specName: '网络支持', propName: '5G网络', propValue: '不支持5G'},

                { specName: '数据接口', propName: '耳机接口类型', propValue: 'Lightning'},
                { specName: '数据接口', propName: 'NFC/NFC模式', propValue: '支持（读卡器模式）'},
                { specName: '数据接口', propName: '充电接口类型', propValue: 'Lightning（iPhone）'},
                { specName: '数据接口', propName: '数据传输接口', propValue: '其他'},

                { specName: '手机特性', propName: '三防标准', propValue: 'IP68'},
                { specName: '手机特性', propName: '生物识别', propValue: '人脸识别'},

                { specName: '辅助功能', propName: '常用功能', propValue: '重力感应；语音识别'},

                { specName: '包装清单', propName: '物品列表', propValue: 'iPhone*1、USB-C 转闪电连接线*1、资料*1'},
            ]
            this.specTable = specTable
            this.getSpanArr(specTable)
        },
        methods:{
            // eslint-disable-next-line no-unused-vars
            spanMethod({ row, column, rowIndex, columnIndex }){
                if(columnIndex === 0){
                    const _row = this.spanArr[rowIndex];
                    const _col = _row>0 ? 1 : 0;
                    return{
                        rowspan: _row,
                        colspan: _col
                    }
                }
            },
            getSpanArr(data){
                for(var i = 0; i< data.length; i++){
                    if(i === 0){
                        this.spanArr.push(1);
                        this.pos = 0
                    }else {
                        //判断当前元素是否跟上一个元素相同
                        if(data[i].specName === data[i-1].specName){
                            this.spanArr[this.pos] +=1;
                            this.spanArr.push(0);
                        }else {
                            this.spanArr.push(1);
                            this.pos = i
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
