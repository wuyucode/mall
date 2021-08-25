<template>
    <div id="category">
        <el-card>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="console.log('select menu')">
                <el-menu-item index="1">手机</el-menu-item>
                <el-menu-item index="2">电脑</el-menu-item>
                <el-menu-item index="3">服装</el-menu-item>
                <el-menu-item index="4">家具</el-menu-item>
                <el-menu-item index="5">生鲜</el-menu-item>
                <el-menu-item index="6">母婴</el-menu-item>
                <el-menu-item index="7">艺术</el-menu-item>
                <el-menu-item index="8">学习</el-menu-item>
                <el-menu-item index="9">美妆</el-menu-item>
                <el-menu-item index="10">医疗</el-menu-item>
                <el-menu-item index="11">交通</el-menu-item>
                <el-menu-item index="12">理财</el-menu-item>
            </el-menu>
            <el-row style="padding:10px">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">全部分类</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">手机</a></el-breadcrumb-item>
                    </el-breadcrumb>
            </el-row>
            <el-row style="padding:5px">
                <span>已选标签：</span>
                <el-tag
                        :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                    {{tag}}
                </el-tag>
            </el-row>
            <div>
                <el-row v-for="(category,catIndex) in categoryList" :key="catIndex">
                    <el-col :span="1.7" class="title"><span>{{category.name}}</span></el-col>
                    <el-col :span="22">
                        <el-row >
                            <el-col class="tag" :span="3" v-for="(tag,tagIndex) in category.tagList" :key="tagIndex">
                                <span @click="printTag(catIndex,tagIndex)">{{tag}}</span>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </el-card>
        <el-row>
            <el-card>
                <el-row>
                    <el-col :span="3">
                        <el-image src="https://img10.360buyimg.com/babel/s320x320_jfs/t1/157883/11/8211/66180/6033a3a6Ebc57b12f/03412a53cb7c5ae8.jpg!cc_320x320.webp"></el-image>
                        <span class="info">华为HUAWEI Mate X2 无缝鹰翼折叠</span>
                        <span class="price">￥17799.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="3">
                        <el-image src="https://img30.360buyimg.com/babel/s320x320_jfs/t1/178933/38/9600/133188/60cc5ce4E6ceb1db2/bd8360ba2964f9bf.jpg!cc_320x320.webp"></el-image>
                        <span class="info">荣耀50 Pro 1亿像素超清影像 5G </span>
                        <span class="price">￥3399.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="3">
                        <el-image src="https://img13.360buyimg.com/babel/s320x320_jfs/t1/156049/15/16968/101724/6054a710Efe177733/52de2b412819280b.jpg!cc_320x320.webp"></el-image>
                        <span class="info">vivo S9e 5G手机 星夜极光 </span>
                        <span class="price">￥ 2299.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="3">
                        <el-image src="https://img14.360buyimg.com/babel/s320x320_jfs/t1/141178/11/17971/98076/60619c13Ea6e0669e/57dd81498c9031f7.jpg!cc_320x320.webp"></el-image>
                        <span class="info">小米11 Ultra 至尊 5G 骁龙888 </span>
                        <span class="price">￥5999.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="3">
                        <el-image src="https://img13.360buyimg.com/babel/s320x320_jfs/t1/178574/38/19926/180820/611cd57bE331db375/5d43055a5dcb7c9c.jpg!cc_320x320.webp"></el-image>
                        <span class="info">Apple iPhone 12 mini (A2400) </span>
                        <span class="price">￥5299.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="3">
                        <el-image src="https://img13.360buyimg.com/babel/s320x320_jfs/t1/125393/39/18221/47832/5fab078dEbc040aa5/590d4034236f65ef.jpg!cc_320x320.webp"></el-image>
                        <span class="info">Apple MacBook Pro 13.3 8G</span>
                        <span class="price">￥9999.00</span>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                </el-row>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "category",
        components:{},
        props:['keyword'],
        data(){
            return{
                activeIndex:'',
                inputVisible: false,
                inputValue: '',
                categoryList:[
                    {
                        name:'品牌',
                        tagList:
                            ['华为(HUAWEI)','OPPO','黑鲨','一加','三星','小米(MI)','荣耀','魅族','Apple','真我(realme)','摩托罗拉','联想','中兴','努比亚(nubia)','ROG'],
                        checked:undefined
                    },
                    {
                        name:'功能',
                        tagList:['超大字体','超大音量','SOS功能','语音命令','语音识别','远程协助','极简桌面模式'],
                        checked:undefined
                    },
                    {
                        name:'系统',
                        tagList:['Android','EMUI 11.0','HarmoryOS2','IOS','其他OS'],
                        checked:undefined
                    },
                    {
                        name:'CPU',
                        tagList:['骁龙855plus','麒麟990','麒麟990 5G','骁龙 768G','Exynos980','MTK Hello G85','MT6873','紫光展锐','骁龙865plus','天玑1000plus'],
                        checked:undefined
                    }
                ]
            }
        },
        computed:{
            dynamicTags(){
                let dynamicTags=[]
                dynamicTags.push(this.keyword)
                this.categoryList.forEach((item)=>{
                    let tag = item.checked
                    if(tag) {
                        dynamicTags.push(item.checked)
                    }
                })
                return dynamicTags
            }
        },
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            printTag(catIndex,tagIndex){
                this.categoryList[catIndex].checked= this.categoryList[catIndex].tagList[tagIndex];
            }
        },

    }
</script>

<style scoped>
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
    .tag{
        font-size: 0.8em;
        padding:3px;
    }
    .title{
        background-color: gainsboro;
        font-size:1em;
        padding:10px 5px 10px 5px;
    }
    .info{
        font-size:0.7em;

    }
    .price{
        font-size:1em;
        color:red;
    }
</style>