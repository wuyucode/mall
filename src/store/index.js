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
                        avatar:"https://i.loli.net/2021/08/26/uDUWzK8XHCIYkMw.jpg",
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
