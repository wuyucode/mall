<template>
    <div id="goodsComments">
        <div class="header">
            <el-row>
                <el-col :span="8">
                    <apexchart type="donut" :options="chart.chartOptions" :series="chart.series"></apexchart>
                </el-col>
                <el-col :span="2"><div class="none"></div></el-col>
                <el-col :span="16">
                    <div v-for="(item,index) in tags" :key="index" class="pdr10 pdt10 fr">
                        <el-tag type="info" style="margin: 5px">{{item.name}} {{item.count}}</el-tag>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <div class="commentsCategory"></div>
                <div class="sortBtn"></div>
            </el-row>
        </div>
        <div class="main">
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodsComments",
        components: {},
        props: ['id'],
        data() {
            return {
                chart: {
                    series: [121, 6, 4],
                    chartOptions: {
                        colors: [' cadetblue', 'darksalmon', 'lightsteelblue'],
                        labels: ['好评', '中评', '差评'],
                    }
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
                ]
            }
        }
    }
</script>

<style scoped>
.a{
    color: cadetblue;
}
</style>
