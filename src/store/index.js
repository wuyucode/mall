import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    //state就是共享的数据
    state: {
        user: {
            username:null,
            password:null,
            realName:null,
            id:null,
            avatar:null,
            addressList:null,
            accessToken:null,
            refreshToken:null
        },
        shopCar:[]
    },
    //当我们直接调用store.state中的数据时, 会不可避免的产生数据安全的问题, 有时候出了错,我们根本不知道是谁修改了这个数据
    //所以, 我们应该使用get和set, 也就是getters和mutations+actions
    //state中的每一个对象都应该有对应的getter
    getters: {
        user: state => {
            return state.user
        },
        username: state => {
            return state.user.username
        },
        password: state => {
            return state.user.password
        },
        realName: state => {
            return state.user.realName
        },
        id: state => {
            return state.user.id
        },
        avatar: state => {
            return state.user.avatar
        },
        addressList: state => {
            return state.user.addressList
        },
        accessToken: state => {
            return state.user.accessToken
        },
        refreshToken: state => {
            return state.user.refreshToken
        },
        shopCar: state => {
            return state.shopCar
        }
    },
    //更改store中的数据唯一的方式就是 提交 mutation
    //mutations里面写的是一个个修改数据的方法
    mutations: {
        //每个mutation中的第一参数都应该是state
        SER_USER_INFO(state,userInfo) {
            state.user = userInfo
        },
        SER_USERNAME(state,username) {
            state.user.username = username
        },
        SER_PASSWORD(state,password) {
            state.user.password = password
        },
        SET_REAL_NAME(state,realName) {
            state.user.realName = realName
        },
        SET_ID(state,id) {
            state.user.id = id
        },
        SET_AVATAR(state,avatar) {
            state.user.avatar = avatar
        },
        SET_ADDRESS_LIST(state,addressList) {
            state.user.addressList = addressList
        },
        SET_ACCESS_TOKEN(state,accessToken) {
            state.user.accessToken = accessToken
        },
        SET_REFRESH_TOKEN(state,refreshToken) {
            state.user.refreshToken = refreshToken
        },
        SET_SHOP_CAR(state,shopCar) {
            state.shopCar = shopCar
        }
    },
    //action里面写的是很多mutations的集合
    //比如用户登录之后,会从后台获得一个用户信息对象, 这个对象包括了用户名,id等基础信息, 和用户的姓名等拓展信息, 以及用户凭证等安全信息
    //这些信息需要每个都set进store中的user对象中, 但是每个信息的修改方法都已经在mustaions里写死了, 我们要做的其实是创建一个新的action,在其中提交多个mutation
    actions: {
        login({ commit }) {
            //eslint-disable-next-line
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let userInfo = {
                        username : "Wuyu",
                        password : "123",
                        realName : "无虞",
                        id: "123",
                        avatar:"data:image/jpeg;base64,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",
                        addressList:["玛卡巴卡","唔西迪西"],
                        accessToken: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal",
                        refreshToken: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal"
                    }
                    let shopCar=[
                        {
                            name:'腾讯极光盒子3 智能网络电视机顶盒 电视盒子 2+16G存储 6K高清双频三天线wifi蓝牙语音',
                            imgUrl:'https://img13.360buyimg.com/n0/s80x80_jfs/t1/54888/14/16821/183548/60eeb2c7Ec96ffd8b/f7d256fa920c4ec7.jpg.dpg',
                            category:'腾讯极光3',
                            unitPrice:'279.00',
                            count:'2',
                            checked:false
                        },
                        {
                            name:' 苏泊尔（SUPOR）空气炸锅家用6L大容量智能电炸锅 无油低脂煎炸 液晶触控智能预约 多功能烤箱薯条机KD60D618',
                            imgUrl:'https://img10.360buyimg.com/n0/s80x80_jfs/t1/182759/20/20870/159706/6126efc1E28a7cb71/0ae725632b4b0ffd.jpg.dpg',
                            category:'智能预约',
                            unitPrice:'399.00',
                            count:'1',
                            checked:false
                        },
                        {
                            name:'MNO华为小米通用智能手表户外运动多功能太空人学生表电子手环',
                            imgUrl:'https://img10.360buyimg.com/n0/s80x80_jfs/t1/178617/7/20875/253750/61272e1eE024bf69f/06725297d321fce0.jpg.dpg',
                            category:'升级黑钢带',
                            unitPrice:'259.00',
                            count:'1',
                            checked:false
                        }

                    ]
                    commit('SET_SHOP_CAR',shopCar)
                    commit('SER_USERNAME', userInfo.username)
                    commit('SER_PASSWORD', userInfo.password)
                    commit('SET_REAL_NAME', userInfo.realName)
                    commit('SET_ID', userInfo.id)
                    commit('SET_AVATAR', userInfo.avatar)
                    commit('SET_ADDRESS_LIST', userInfo.addressList)
                    commit('SET_ACCESS_TOKEN', userInfo.access_token)
                    commit('SET_REFRESH_TOKEN', userInfo.refresh_token)

                    resolve()
                },1500)
            })

        },
        logout({ commit }) {
            //eslint-disable-next-line
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                        commit('SER_USERNAME', '')
                        commit('SER_PASSWORD', '')
                        commit('SET_REAL_NAME', '')
                        commit('SET_ID', '')
                        commit('SET_AVATAR', '')
                        commit('SET_ADDRESS_LIST', '')
                        commit('SET_ACCESS_TOKEN', '')
                        commit('SET_REFRESH_TOKEN', '')
                        resolve()
                    },1500)
            })
        }
    },
    modules: {
    }
})
