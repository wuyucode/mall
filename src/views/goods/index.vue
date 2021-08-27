<template>
    <div id="goodsIndex">
        <el-row>
            <el-col :span="10">
                <el-image :src="checkedImgUrl" style="width:450px;height: 500px" :previewSrcList="viewSrcList"></el-image>
                <ul style="width:450px">
                    <li v-for="(item,index) in imgUl" :key="index" class="img_li" :class="{img_li_checked:item.checked}" @click="checkedImg(index)">
                        <el-image :src="item.url" style="width:50px;height: 50px"></el-image>
                    </li>
                </ul>
            </el-col>
            <el-col :span="14"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "goodsIndex",
        props:["id"],
        component:{},
        data(){
            return{
                activeIndex:'1',
                goodsDetail:{},
                checkedImgUrl:"",
            }
        },
        computed:{
            viewSrcList(){
                //eslint-disable-next-line no-unused-vars
                let previewSrcList = []
                this.goodsDetail.colorList.forEach((item)=>{
                    if(item.checked){
                        previewSrcList = item.imgUrlList
                    }
                })
                return previewSrcList
            },
            imgUl(){
                let imgUl = []
                this.goodsDetail.colorList.forEach((item)=>{
                    if(item.checked){
                        for(let i =0;i < item.imgUrlList.length;i++){
                            let img = {url:item.imgUrlList[i],checked:false}
                            if(i===0){
                                img.checked = true
                            }
                            imgUl.push(img)
                        }
                    }
                })
                return imgUl
            }

        },
        methods:{
            toDetail(){
                this.$router.push({path:"/goods/:id/detail"})
            },
            toSpec(){
                this.$router.push({path:"/goods/:id/spec"})
            },
            toService(){
                this.$router.push({path:"/goods/:id/service"})
            },
            toComments(){
                this.$router.push({path:"/goods/:id/comments"})
            },
            checkedImg(index){
                this.imgUl.forEach((item)=>{
                    item.checked = false
                })
                this.imgUl.forEach((item,index1)=>{
                    if(index1 === index){
                        item.checked = true
                        this.checkedImgUrl = item.url
                    }
                })
            }
        },
        created(){
            let goodsDetail = {
                id:"123456",
                name:"卡罗莱女表全自动机械表时尚女士手表简约镶钻防水真皮精钢陶瓷带腕表手表女",
                price:3076.00,
                discount:2776.00,
                couponList:[],
                wight:0.12,
                colorList:[
                    {
                        color:"白金",
                        imgUrlList:[
                            "https://img14.360buyimg.com/n0/jfs/t1/119834/10/15699/114042/5f5d9766Eb7dd1ddb/5a02885d6a53d6ed.jpg",
                            "http://img14.360buyimg.com/n0/jfs/t1/85716/22/17403/83103/5e85e081E1a4cc100/d7ef143c54e90cfb.jpg",
                            "http://img14.360buyimg.com/n0/jfs/t1/112943/34/18006/110311/5f6185ffEb41afdca/3e00058652cf92a8.jpg",
                            "https://img14.360buyimg.com/n0/jfs/t1/119834/10/15699/114042/5f5d9766Eb7dd1ddb/5a02885d6a53d6ed.jpg",
                            "http://img14.360buyimg.com/n0/jfs/t1/85716/22/17403/83103/5e85e081E1a4cc100/d7ef143c54e90cfb.jpg",
                            "http://img14.360buyimg.com/n0/jfs/t1/112943/34/18006/110311/5f6185ffEb41afdca/3e00058652cf92a8.jpg"
                        ],
                    },
                    {
                        color:"玫瑰金",
                        imgUrlList:[
                            "https://img14.360buyimg.com/n0/jfs/t1/119834/10/15699/114042/5f5d9766Eb7dd1ddb/5a02885d6a53d6ed.jpg",
                            "http://img14.360buyimg.com/n0/jfs/t1/115008/3/17/91910/5e85e081E34d10626/01cb1036054b5442.jpg",
                            "http://img14.360buyimg.com/n0/jfs/t1/117406/30/23/90062/5e85e081E0e050907/21c24d9d0969a163.jpg",
                            "https://img14.360buyimg.com/n0/jfs/t1/119834/10/15699/114042/5f5d9766Eb7dd1ddb/5a02885d6a53d6ed.jpg",
                            "http://img14.360buyimg.com/n0/jfs/t1/115008/3/17/91910/5e85e081E34d10626/01cb1036054b5442.jpg",
                            "http://img14.360buyimg.com/n0/jfs/t1/117406/30/23/90062/5e85e081E0e050907/21c24d9d0969a163.jpg",
                        ],
                    }
                ],
                typeList:["标配版","四年只换不修","腕带保养取送","腕表调节"],
                setList:["优惠套装1","优惠套装2","优惠套装3","优惠套装4","优惠套装5"],
                serviceList:["全保修2年","碎表镜修理2年","换新保2年"],

            }
            for(let i = 0;i < goodsDetail.colorList.length;i++){
                i === 0 ? goodsDetail.colorList[i] = Object.assign(goodsDetail.colorList[i],{checked:true})
                    : goodsDetail.colorList[i] = Object.assign(goodsDetail.colorList[i],{checked:false})
            }
            this.goodsDetail = goodsDetail
            this.checkedImgUrl = this.imgUl[0].url

        }
    }
</script>

<style scoped>
.img_li{
    list-style-type:none;
    float: left;
    padding: 5px;
    border: 2px solid #ffffff;
}
.img_li_checked{
    list-style-type:none;
    float: left;
    padding: 5px;
    border: 2px solid cornflowerblue;
}
</style>