<template>
    <div id="goodsComments">
        <div class="header">
            <el-row>
                <el-col :span="8">
                    <apexchart type="donut" :options="chart.chartOptions" :series="chart.series"></apexchart>
                </el-col>
                <el-col :span="2"><div class="none"></div></el-col>
                <el-col :span="16">
                    <div v-for="(item,index) in tags" :key="index" class="pdr10 pdt30 fl">
                        <el-tag type="info" style="margin: 5px">{{item.name}} {{item.count}}</el-tag>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <div class="commentsCategory"></div>
                <div class="sortBtn"></div>
            </el-row>
        </div>
        <div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">全部评论</el-menu-item>
                <el-menu-item index="2">晒图</el-menu-item>
                <el-menu-item index="3">视频晒单</el-menu-item>
                <el-menu-item index="4">追评</el-menu-item>
                <el-menu-item index="5">好评</el-menu-item>
                <el-menu-item index="6">中评</el-menu-item>
                <el-menu-item index="7">差评</el-menu-item>
                <el-menu-item index="8">只看当前商品评价</el-menu-item>
                <el-menu-item>
                    <el-select>
                        <el-option
                                v-for="item in sortTypeList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="main pdt5">
            <el-row v-for="(comment,commentIndex) in commentList" :key="commentIndex" class="pdt">
                <el-col :span="4" style="text-align: center">
                    <div><el-avatar :src="comment.userInfo.avatarUrl" :size="60"></el-avatar></div>
                    <div class="pdt10"><span style="...">{{comment.userInfo.username}}</span></div>
                </el-col>
                <el-col :span="20">
                    <el-row>
                        <el-col style="text-align: left">
                            <el-rate v-model="comment.rate" :disabled="true"></el-rate>
                        </el-col>
                        <el-col style="text-align: right">
                            <span style="color: #909399;">评论于 {{comment.date}}</span>
                        </el-col>
                    </el-row>
                    <p style="margin-right: 50px">{{comment.content.text}}</p>
                    <div v-if="comment.hasImg">
                        <div v-for="(img,imgIndex) in comment.content.imageList" :key="imgIndex" class="img_li" @click="checkImg(commentIndex,imgIndex)">
                            <el-tag class="pdr5 fl" :class="{img_li_checked: img.checked,img_li_not_checked: !img.checked}" style="height: 61px;margin:4px;"
                                    type="info"
                                    effect="plain"
                                    size="medium"
                                   >
                                <el-image :src="img.url" style="width: 55px; height:55px"></el-image>
                            </el-tag>
                        </div>
                    </div>
                    <el-image :src="comment.content.videoUrl"></el-image>
                    <div style="text-align: left">
                        <el-tag style="border: 0" effect="plain" type="danger" size="medium"><i class="el-icon-star-off"></i>{{comment.likes}}</el-tag>
                        <el-tag style="border: 0" effect="plain" type="success" size="medium"><i class="el-icon-chat-dot-round"></i>{{comment.comments}}</el-tag>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {validatenull} from "../../utils/validate";

    export default {
        name: "goodsComments",
        components: {},
        props: ['id'],
        data() {
            return {
                chart: {
                    series: [131, 1.9, 3.6],
                    chartOptions: {
                        colors: [' cadetblue', 'darksalmon', 'lightsteelblue'],
                        labels: ['好评', '中评', '差评'],
                    },
                },
                tags: [
                    {name: '清晰度高',count: '3075'},
                    {name: '反应超快',count: '2814'},
                    {name: '漂亮大方',count: '1757'},
                    {name: '色彩饱满',count: '823'},
                    {name: '待机给力',count: '764'},
                    {name: '性能一流',count: '750'},
                    {name: '手感一流',count: '687'},
                    {name: '音质上乘',count: '484'},
                    {name: '照片清晰',count: '100'},
                    {name: '内存充足',count: '94'},
                ],
                activeIndex: '1',
                sortTypeList: [{value: '选项1',label: '默认排序'},{value: '选项2',label: '时间排序'}],
                sortTypeSelected: '默认排序',
                commentList: [],
                previewSrcList: [],
            }
        },
        methods:{
            handleSelect(key) {
                switch (key) {
                    case "1":
                        this.$router.push({path: '/detail/shopComments/commentDetail'})
                        break
                    case "2":
                        break
                    case "3":
                        break
                    case "4":
                        break
                    case "5":
                        break
                    case "6":
                        break
                    case "7":
                        break
                    case "8":
                        break
                    default:
                        console.log("没有这个选项")
                }
            },
            checkImg(commentIndex, imgIndex){
                this.commentList[commentIndex].content.imageList.forEach((item) =>{
                    item.checked = false
                })
                this.commentList[commentIndex].content.imageList.forEach((item,index) =>{
                    if(imgIndex === index){
                        item.checked = true
                        this.commentList[commentIndex].content.checkedImgUrl = item.url
                    }
                })
                let previewSrcList = []
                this.commentList[commentIndex].content.imageList.forEach((item) =>{
                    previewSrcList.push(item.url)
                })
                this.previewSrcList = previewSrcList
            }
        },
        mounted() {
            let commentList = [
                {
                    userInfo:{
                        username: 'wuyuwuyu',
                        avatarUrl: 'https://i.loli.net/2021/08/26/uDUWzK8XHCIYkMw.jpg'
                    },
                    rate: 5,
                    date: '2021-09-02 22:43',
                    likes: 88,
                    comments: 888,
                    content: {
                        text:'外形外观：颜值超高，很漂亮很适合女孩子使用，角度不同渐变的颜色很喜欢拍照效果：拍照挺好的，暗光情况下 人和背景都非常清晰,就是充电的速度不快，没有之前的那款note5充电快，这个有待改善，总体来说还是不错的，很喜欢，一直使用的手机都是vivo的',
                        imageList: [
                            "https://img13.360buyimg.com/babel/s320x320_jfs/t1/156049/15/16968/101724/6054a710Efe177733/52de2b412819280b.jpg!cc_320x320.webp",
                            "https://img30.360buyimg.com/n0/s48x48_jfs/t1/177741/23/21085/123120/612854f9Eb5b9c136/1d3964cd48af1465.jpg",
                            "https://img30.360buyimg.com/n0/s48x48_jfs/t1/191258/26/20221/107969/612854fbE86807dac/731a6fe94c0862c4.jpg",
                            "https://img30.360buyimg.com/n0/s48x48_jfs/t1/199615/10/4929/89878/612854f9E8692c10f/2f78b60c287176c9.jpg",
                            "https://img30.360buyimg.com/n0/s48x48_jfs/t1/194711/16/15384/293362/61013835E27b3c471/54a13d409c1ec21a.jpg",
                            "https://img30.360buyimg.com/n0/s48x48_jfs/t1/181846/2/16089/683668/61013835Eb8a34bc2/521e5c27438dc648.jpg",
                            "https://img30.360buyimg.com/n0/s48x48_jfs/t1/187973/31/14745/465706/60fd8347E95a3258c/19bc2ce2aa5f67e2.jpg",
                            "https://img30.360buyimg.com/n0/s48x48_jfs/t1/183168/28/15940/433283/60fd8347E0414f053/10c14ed45325ac54.jpg",
                        ],
                        videoUrl: 'https://img13.360buyimg.com/babel/s320x320_jfs/t1/156049/15/16968/101724/6054a710Efe177733/52de2b412819280b.jpg!cc_320x320.webp',
                    }
                }
            ]
            commentList.forEach((item) =>{
                let hasImg = false
                if(!validatenull(item.content.imageList)){
                    hasImg = true
                    let imageList= []
                    for(let i = 0; i<item.content.imageList.length; i++){
                        let img = {url: item.content.imageList[i],checked: false}
                        i === 0 ? img.checked = true : img.checked = false
                        imageList.push(img)
                    }
                    item.content.imageList = imageList
                    item.content = Object.assign(item.content,{checkedImgUrl: imageList[0].url})
                }
                item = Object.assign(item,{hasImg: hasImg})
            })
            this.commentList = commentList
        },
    }
</script>

<style scoped>
    img_li{
        list-style-type: none; float: left; padding: 5px; border: 2px solid #ffffff;
    }
    .img_li_checked{
        border: 2px solid #F56C6C;
    }
    .img_li_not_checked{
        border: 2px solid #ffffff
    }
</style>
