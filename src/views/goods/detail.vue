<template>
    <div id="goodDetail" class="pdt30" style="text-align: center">
        <p v-html="detailHtml"></p>
    </div>
</template>

<script>
    export default {
        name: "goodsDetail",
        components: {},
        data() {
            return {
                detailHtml:''
            }
        },
        mounted() {
// esl int -disable -next-line no-unused- vars
            let detailHtml =
                '<a href="https://h5.m.jd.com/babelDiy/Zeus/3ubbmY6yVAE8DzXXTsMR3iNr4xQo/index.html?babelChannel=ttt3c">' +
                '<img src="https://img13.360buyimg.com/cms/jfs/t1/190060/10/19956/51080/6124bc02E7fa893a1/304d18248fc877e7.jpg" style="width: 700px"></img>' +
                '</a>' +
                '<img src="https://img10.360buyimg.com/cms/jfs/t1/192940/32/18878/1851294/611f2103E0286926a/9c440d9c784811a2.jpg" style="width: 700px"></img>' +
                '<img src="https://img14.360buyimg.com/cms/jfs/t1/199214/6/4018/1121043/611f2102Ed9a2ecec/3623168ee6a5fc8d.jpg" style="width: 700px"></img>'
            this.detailHtml = detailHtml
        },
    }
</script>

<style scoped>

</style>
