<template>
    <div id="goodsIndex">
        <el-card>
            <el-breadcrumb  separator="/" style="margin:0 0 15px 0">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">手机</a></el-breadcrumb-item>
                <el-breadcrumb-item>apple</el-breadcrumb-item>
            </el-breadcrumb>
            <el-row>
                <el-col :span="10" >
                    <el-row style="border: 1px solid #DCDFE6;width: 422px; height: 422px">
                        <el-image :src="checkedImgUrl" style="width: 420px; height: 420px"
                                  :previewSrcList="previewSrcList"></el-image>
                    </el-row>
                    <el-row class="pdt30">
                        <div v-for="(item,index) in imgUl" :key="index" class="img_list" @click="checkImg(index)">
                            <!--              使用vue动态绑定class的时候, 一定要记得最好绑定两个, 一个是被选中的css, 一个是未被选中的css-->
                            <el-tag class="pdr5"
                                    :class="{img_list_checked: item.checked, img_list_not_checked: !item.checked}"
                                    style="height: 59px;"
                                    type="info"
                                    effect="plain"
                                    size="medium">
                                <el-image :src="item.url" style="width: 55px; height: 55px"></el-image>
                            </el-tag>
                        </div>
                    </el-row>
                </el-col>
                <el-col :span="1">
                    <div class="none"></div>
                </el-col>
                <el-col :span="13">
                    <div class="header padding10">
                        <span style="font-weight: bolder; font-size: 1.4em">{{goodsDetail.name}}</span>
                    </div>
                    <div class="main">
                        <el-form ref="form" :model="form" label-width="70px">
                            <el-form-item label="价 格">
                                <div v-if="goodsDetail.discount !== 0">
                                    <span style="font-size: 2em;color: #F56C6C">￥{{goodsDetail.discount}}</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span style="font-size: 1.4em;color: #909399;text-decoration: line-through">￥{{goodsDetail.price}}</span>
                                </div>
                                <div style="font-size: 2em" v-if="goodsDetail.discount === 0">{{goodsDetail.price}}
                                </div>
                            </el-form-item>
                            <el-form-item label="优 惠">

                                <el-tag type="danger" class="pdr5 fl" style="margin: 5px" v-for="(item,index) in goodsDetail.couponList" :key="index">
                                    {{ item }}
                                </el-tag>

                            </el-form-item>
                            <el-form-item label="重 量">
                                <span>{{goodsDetail.wight}}kg</span>
                            </el-form-item>
                            <el-divider></el-divider>
                            <el-form-item label="颜 色">

                                <el-tag :class="{img_list_checked: item.checked}" style="height: 70px;margin: 5px"
                                        type="info"
                                        effect="plain"
                                        size="medium"
                                        class="pdr5 fl" v-for="(item,index) in goodsDetail.colorList" :key="index"
                                        @click="checkColor(index)">
                                    <div>
                                        <div class="" >
                                            <el-image :src="item.imgUrlList[0]"
                                                      style="width: 58px; height: 58px;margin: 5px;padding-right:45px"></el-image>
                                        </div>
                                        <div class="ss" style="width:100px;height: 80px">
                                            <span style="font-size: 1.4em;position: absolute;top:30%;padding-left:15%;">{{ item.color }}</span>

                                        </div>
                                    </div>
                                </el-tag>

                            </el-form-item>
                            <el-form-item label="内 存">

                                <el-tag
                                        type="info"
                                        :effect=" item.checked ? 'dark' : 'plain' "
                                        v-for="(item,index) in goodsDetail.RAMList" :key="index"
                                        @click="checkRAM(index)" style="margin: 5px">
                                    {{ item.name }}
                                </el-tag>

                            </el-form-item>
                            <el-form-item label="版 本">
                                <el-tag
                                        type="primary"
                                        :effect=" item.checked ? 'dark' : 'plain' "
                                        class="pdr5 fl" v-for="(item,index) in goodsDetail.typeList" :key="index"
                                        @click="checkType(index)" style="margin: 5px">
                                    {{ item.name }}
                                </el-tag>
                            </el-form-item>
                            <el-form-item label="套 装">
                                <el-tag
                                        type="success"
                                        :effect=" item.checked ? 'dark' : 'plain' "
                                        class="pdr5 fl" v-for="(item,index) in goodsDetail.setList" :key="index"
                                        @click="checkSet(index)" style="margin: 5px">
                                    {{ item.name }}
                                </el-tag>
                            </el-form-item>
                            <el-form-item label="服 务">
                                <el-tag
                                        type="warning"
                                        :effect=" item.checked ? 'dark' : 'plain' "
                                        class="pdr5 fl" v-for="(item,index) in goodsDetail.serviceList" :key="index"
                                        @click="checkService(index)" style="margin: 5px">
                                    {{ item.name }}
                                </el-tag>
                            </el-form-item>
                            <el-divider></el-divider>
                            <el-form-item>

                                <el-input-number style="width: 120px" v-model="count" controls-position="right"
                                                 :min="1" class="fl" ></el-input-number>


                                <el-button type="danger" @click="addShopCart" class="fl pdl30" style="margin: 5px">加入购物车</el-button>

                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </el-card>
        <el-menu    :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="navigate"
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">商品详情</el-menu-item>
            <el-menu-item index="2">规格包装</el-menu-item>
            <el-menu-item index="3">服务保障</el-menu-item>
            <el-menu-item index="4">商品评价</el-menu-item>
        </el-menu>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "goodsIndex",
        props: ["id"],
        components: {},
        data() {
            return {
                activeIndex: '1',
                goodsDetail: {},
                imgUl: [],
                count: 1,
            }
        },
        computed: {
            checkedImgUrl() {
                let checkedImgUrl = ""
                this.imgUl.forEach((item) => {
                    if (item.checked) checkedImgUrl = item.url
                })
                return checkedImgUrl
            },
            previewSrcList() {
                // eslint-disable-next-line no-unused-vars
                let previewSrcList = []
                this.goodsDetail.colorList.forEach((item) => {
                    if (item.checked) previewSrcList = item.imgUrlList
                })
                return previewSrcList
            },
            form() {
                let form = {color: '', RAM: '', type: '', set: '', service: '', count: 0}
                this.goodsDetail.colorList.forEach((item) => {
                    if (item.checked) form.color = item.color
                })
                this.goodsDetail.RAMList.forEach((item) => {
                    if (item.checked) form.RAM = item.name
                })
                this.goodsDetail.typeList.forEach((item) => {
                    if (item.checked) form.type = item.name
                })
                this.goodsDetail.setList.forEach((item) => {
                    if (item.checked) form.set = item.name
                })
                this.goodsDetail.serviceList.forEach((item) => {
                    if (item.checked) form.service = item.name
                })
                form.count = this.count
                return form
            }
        },
        methods: {

            checkImg(index) {
                this.imgUl.forEach((item) => {
                    item.checked = false
                })
                this.imgUl.forEach((item, index1) => {
                    if (index1 === index) {
                        item.checked = true
                    }
                })
            },
            checkColor(index) {
                this.goodsDetail.colorList.forEach((item) => {
                    item.checked = false
                })
                this.goodsDetail.colorList.forEach((item, index1) => {
                    if (index1 === index) {
                        item.checked = true
                        let showImgUrlList = []
                        for (let i = 0; i < item.imgUrlList.length; i++) {
                            let img = {url: "", checked: false}
                            img.url = item.imgUrlList[i]
                            i === 0 ? img.checked = true : img.checked = false
                            showImgUrlList.push(img)
                        }
                        this.imgUl = showImgUrlList
                    }
                })
            },
            checkType(index) {
                this.goodsDetail.typeList.forEach((item) => {
                    item.checked = false
                })
                this.goodsDetail.typeList.forEach((item, index1) => {
                    if (index1 === index) {
                        item.checked = true
                    }
                })
            },
            checkSet(index) {
                this.goodsDetail.setList.forEach((item) => {
                    item.checked = false
                })
                this.goodsDetail.setList.forEach((item, index1) => {
                    if (index1 === index) {
                        item.checked = true
                    }
                })
            },
            checkService(index) {
                this.goodsDetail.serviceList.forEach((item) => {
                    item.checked = false
                })
                this.goodsDetail.serviceList.forEach((item, index1) => {
                    if (index1 === index) {
                        item.checked = true
                    }
                })
            },
            checkRAM(index) {
                this.goodsDetail.RAMList.forEach((item) => {
                    item.checked = false
                })
                this.goodsDetail.RAMList.forEach((item, index1) => {
                    if (index1 === index) {
                        item.checked = true
                    }
                })
            },
            checkTestImg(index) {
                this.imgUl.forEach((item) => {
                    item.checked = false
                })
                this.imgUl.forEach((item, index1) => {
                    if (index1 === index) {
                        item.checked = true
                    }
                })
            },
            addShopCart() {

            },
            navigate(key){
                switch(key){
                    case "1":this.$router.push({path:'/detail'}); break
                    case "2":this.$router.push({path:'/spec'}); break
                    case "3":this.$router.push({path:'/service'}); break
                    case "4":this.$router.push({path:'/comments'}); break
                }
            }
        },
        //created在DOM节点加载之前执行
        //mounted在DOM节点加载之后执行
        created() {
            let goodsDetail = {
                id: "123456",
                name: "vivo S10 5G全网通拍照手机轻薄 光致变色工艺 天玑1100 6400万后置三摄 6nm旗舰芯片 8+128GB 绮光焕彩",
                price: 5299.00,
                discount: 4799.00,
                couponList: ["满3000减300","满1000-50"],
                wight: 0.371,
                colorList: [
                    {
                        color: "萤石黑",
                        imgUrlList: [
                            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/205113/23/3281/178578/61289b33E508b48f6/d8f2318031ce5157.jpg",
                            "https://img12.360buyimg.com/n5/s54x54_jfs/t1/148767/39/18017/86358/5fd32ff0E5ca41721/d885f7c401dfa557.jpg",
                            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/142574/9/17878/51690/5fd34693E1d6142e2/d2d35afca393e566.jpg",
                            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/136123/20/19495/50331/5fd34697E35ee8d84/9e542233d66da7c1.jpg",
                            "https://img12.360buyimg.com/n1/s450x450_jfs/t1/133295/19/19538/138037/5fd3469bE861a6bd9/f8b640b7d732a93c.jpg",
                        ]
                    },
                    {
                        color: "丝绒白",
                        imgUrlList: [
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/178616/28/20703/176483/6124c73cEebbf678e/4d51252b54f1784d.jpg",
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/153457/35/9377/80509/5fd3300bEa14f6b0f/f60a95a9f1731200.jpg",
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/149047/25/18194/49137/5fd346c5Ee424ff8d/ffcc4ee8cc62905f.jpg",
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/142613/5/18084/50114/5fd346c7E24cb8b6b/1f1271b3bfed34b6.jpg",
                            "https://img10.360buyimg.com/n1/s450x450_jfs/t1/139707/40/18012/138037/5fd346caEa8be9e7a/88da23dcff9d772a.jpg",
                        ]
                    },
                    {
                        color: "绮炫彩",
                        imgUrlList: [
                            "https://img0.baidu.com/it/u=953663004,29675388&fm=26&fmt=auto&gp=0.jpg",
                            "https://img14.360buyimg.com/n0/jfs/t1/78335/15/17433/57773/60f685c1E5fe30b2c/ffc9a23dbfac0089.jpg",
                            "https://img14.360buyimg.com/n0/jfs/t1/184639/17/14869/29516/60f685c4E952bbbba/76949218906f3819.jpg",
                            "https://img14.360buyimg.com/n0/jfs/t1/188219/20/14084/64834/60f685d1E09920e57/b7769bb9bbbcff9b.jpg",
                            "https://img14.360buyimg.com/n0/jfs/t1/177463/6/14146/47392/60f685d1E071c40a2/63c5d797c01ce44d.jpg",
                        ]
                    }
                ],
                RAMList: [{name: "64GB"}, {name: "128GB"}, {name: "256GB"}],
                typeList: [{name: "公开版"}, {name: "AirPods套装"}, {name: "快充套装"}, {name: "官方标配"}],
                setList: [{name: "优惠套装1"}, {name: "优惠套装2"}, {name: "优惠套装3"}, {name: "优惠套装4"}, {name: "优惠套装5"}, {name: "优惠套装6"}],
                serviceList: [{name: "换休无忧月付版"}, {name: "换休无忧年付版"}, {name: "原厂电池换新"}, {name: "2年碎屏保修"}, {name: "2年电池换新"}, {name: "黑科技充电宝"}]
            }
            for (let i = 0; i < goodsDetail.colorList.length; i++) {
                i === 0 ? goodsDetail.colorList[i] = Object.assign(goodsDetail.colorList[i], {checked: true})
                    : goodsDetail.colorList[i] = Object.assign(goodsDetail.colorList[i], {checked: false})
            }
            for (let i = 0; i < goodsDetail.RAMList.length; i++) {
                i === 0 ? goodsDetail.RAMList[i] = Object.assign(goodsDetail.RAMList[i], {checked: true})
                    : goodsDetail.RAMList[i] = Object.assign(goodsDetail.RAMList[i], {checked: false})
            }
            for (let i = 0; i < goodsDetail.typeList.length; i++) {
                i === 0 ? goodsDetail.typeList[i] = Object.assign(goodsDetail.typeList[i], {checked: true})
                    : goodsDetail.typeList[i] = Object.assign(goodsDetail.typeList[i], {checked: false})
            }
            // eslint-disable-next-line no-unused-vars
            goodsDetail.setList.forEach((item) => {
                item = Object.assign(item, {checked: false})
            })
            // eslint-disable-next-line no-unused-vars
            goodsDetail.serviceList.forEach((item) => {
                item = Object.assign(item, {checked: false})
            })

            this.goodsDetail = goodsDetail
            this.checkColor(0)
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .img_list {
        list-style-type: none;
        float: left;
        padding: 5px;
    }

    .img_list_not_checked {
        border: 2px solid #ffffff;
    }

    .img_list_checked {
        border: 2px solid #F56C6C;
    }
</style>
