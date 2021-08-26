<template>
    <div id="indexContent">
        <el-row>
            <el-card>
                <el-carousel :interval="4000" type="card" height="330px">
                    <el-carousel-item v-for="(item) in imgList" :key="item.index">
                        <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                            <el-image :src="item.url" ></el-image>
                        </el-tooltip>
                    </el-carousel-item>
                </el-carousel>
            </el-card>
        </el-row>

        <el-row>
            <el-card>
                <el-row>
                    <el-col :span="5">
                        <el-image src="https://img12.360buyimg.com/cms/jfs/t1/52390/35/13874/60767/5da9926aEea3fdc3b/a0eb6f6ba283d73e.jpg.webp"></el-image>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="5">
                        <el-image src="https://img11.360buyimg.com/cms/jfs/t8299/104/2106646636/43458/5ae0afba/59c4edd9N192bf8e6.jpg.webp"></el-image>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="6" style="padding: 5px;">
                        <el-row class="customCard">
                            <el-row >
                                <span class="channelItemName">创意礼品</span>
                                <span class="channelItemTitle">表达美好心意</span>
                            </el-row>
                            <el-row >
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://m.360buyimg.com/mobilecms/s792x762_jfs/t1/26594/5/2411/61467/5c1b7379Eeb30585c/b6255f4f52c80efb.jpg!q70.jpg"></el-image>
                                </el-col>
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://m.360buyimg.com/mobilecms/s923x1026_jfs/t1/15699/25/2264/220027/5c1b192cE930827a0/2a87823efac91895.jpg!q70.jpg"></el-image>
                                </el-col>

                            </el-row>
                        </el-row>
                    </el-col>
                    <el-col :span="6" style="padding: 5px;">
                        <el-row class="customCard">
                            <el-row >

                                <span class="channelItemName">小王子</span>
                                <span class="channelItemTitle">学会爱自己</span>
                            </el-row>
                            <el-row >
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://m.360buyimg.com/mobilecms/s1026x992_jfs/t1/23503/31/2320/177633/5c1b1bd0Eb9f25fba/6c6813d7ec3a1a3f.jpg!q70.jpg"></el-image>
                                </el-col>
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://m.360buyimg.com/mobilecms/s923x1026_jfs/t1/15699/25/2264/220027/5c1b192cE930827a0/2a87823efac91895.jpg!q70.jpg"></el-image>
                                </el-col>

                            </el-row>
                        </el-row>
                    </el-col>
                    <el-col :span="1"><div class="none"></div></el-col>
                    <el-col :span="6" style="padding: 5px;">
                        <el-row class="customCard">
                            <el-row >
                                <span class="channelItemName">创意礼品</span>
                                <span class="channelItemTitle">表达美好心意</span>
                            </el-row>
                            <el-row >
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://m.360buyimg.com/mobilecms/s792x762_jfs/t1/26594/5/2411/61467/5c1b7379Eeb30585c/b6255f4f52c80efb.jpg!q70.jpg"></el-image>
                                </el-col>
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://m.360buyimg.com/mobilecms/s923x1026_jfs/t1/15699/25/2264/220027/5c1b192cE930827a0/2a87823efac91895.jpg!q70.jpg"></el-image>
                                </el-col>

                            </el-row>
                        </el-row>
                    </el-col>
                    <el-col :span="6" style="padding: 5px;">
                        <el-row class="customCard">
                            <el-row >

                                <span class="channelItemName">小王子</span>
                                <span class="channelItemTitle">学会爱自己</span>
                            </el-row>
                            <el-row >
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://m.360buyimg.com/mobilecms/s1026x992_jfs/t1/23503/31/2320/177633/5c1b1bd0Eb9f25fba/6c6813d7ec3a1a3f.jpg!q70.jpg"></el-image>
                                </el-col>
                                <el-col :span="2"><div class="none"></div></el-col>
                                <el-col :span="9">
                                    <el-image src="https://m.360buyimg.com/mobilecms/s923x1026_jfs/t1/15699/25/2264/220027/5c1b192cE930827a0/2a87823efac91895.jpg!q70.jpg"></el-image>
                                </el-col>

                            </el-row>
                        </el-row>
                    </el-col>
                </el-row>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "indexContent",
        components:{},
        data(){
            return{
                imgList:[
                    {title:"腾讯ROG游戏手机5s系列",url:"https://img10.360buyimg.com/pop/s1180x940_jfs/t1/198418/4/4525/95504/612310e0E61c38cb9/d7c6469d3a9b00cc.jpg.webp"},
                    {title:"京选好物",url:"https://imgcps.jd.com/ling4/100021781178/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6f1/c451bb0d/cr/s/q.jpg"},
                    {title:"范思哲石英表",url:"https://img11.360buyimg.com/pop/s1180x940_jfs/t1/185014/39/6361/56343/60b1fa42Ecccae35f/7e3be6658e144bc3.jpg.webp"},
                    {title:"8月来电好物季",url:"https://img13.360buyimg.com/pop/s1180x940_jfs/t1/204538/27/418/100695/6110eb81E40c33891/98a22a2cf9021e4e.jpg.webp"},
                    {title:"ThinkBook",url:"https://imgcps.jd.com/ling4/100021781178/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa28/50d19800/cr/s/q.jpg"},
                    {title:"电竞博物志",url:"https://img14.360buyimg.com/pop/s1180x940_jfs/t1/192167/26/19766/101499/61233115E468ec999/3a66f9e650795060.jpg.webp"},

                ]
            }
        }
    }
</script>

<style scoped>
.channelItemName{
    margin-left:17px;
    font-size: 1.3em;
    font-weight: bolder;
}
.channelItemTitle{
    margin-left:10px;
    font-size: 0.7em;
    color:#909399;
}
.customCard{
    border:1px solid #DCDFE6;
    border-radius: 5px;
    padding:20px 0;
}
</style>