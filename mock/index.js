export default {
    'POST /api/userInfo': (req,res)=>{
        const user=req.body;
        if(user.username=='a'&& user.password=='a'){
            return res.json({
                code:200,
                success_description:"登陆成功",
                success:true,
                data:{
                    username : "a",
                    password : "a",
                    realName : "wuyu",
                    id: "111",
                    avatar:"https://i.loli.net/2021/08/26/uDUWzK8XHCIYkMw.jpg",
                    address:["青青草原","宝宝花园"],
                    accessToken: "1111",
                    refreshToken: "1111",
                },

            })
        }else if(user.username!=='123'){
            return res.json({
                code: 503,
                error_description:"登录失败，账户不存在",
                success: false,

            })
        }else if(user.username==='123'&& user.password!=='123'){
            return res.json({
                code: 503,
                error_description: "登录失败，密码错误",
                success: false,

            })
        }
    },
    'GET /api/carouselList':(req,res)=>{
        return res.json({
            code:200,
            msg:"",
            success:true,
            data:[
                {
                    title: "腾讯ROG游戏手机5s系列",
                    url: "https://img10.360buyimg.com/pop/s1180x940_jfs/t1/198418/4/4525/95504/612310e0E61c38cb9/d7c6469d3a9b00cc.jpg.webp"
                },
                {
                    title: "京选好物",
                    url: "https://imgcps.jd.com/ling4/100021781178/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6f1/c451bb0d/cr/s/q.jpg"
                },
                {
                    title: "范思哲石英表",
                    url: "https://img11.360buyimg.com/pop/s1180x940_jfs/t1/185014/39/6361/56343/60b1fa42Ecccae35f/7e3be6658e144bc3.jpg.webp"
                },
                {
                    title: "8月来电好物季",
                    url: "https://img13.360buyimg.com/pop/s1180x940_jfs/t1/204538/27/418/100695/6110eb81E40c33891/98a22a2cf9021e4e.jpg.webp"
                },
                {
                    title: "ThinkBook",
                    url: "https://imgcps.jd.com/ling4/100021781178/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa28/50d19800/cr/s/q.jpg"
                },
                {
                    title: "电竞博物志",
                    url: "https://img14.360buyimg.com/pop/s1180x940_jfs/t1/192167/26/19766/101499/61233115E468ec999/3a66f9e650795060.jpg.webp"
                },

            ]
        })
    },
    'GET /api/categoryList':(req,res)=>{
        return res.json({
            code:200,
            msg:"",
            success:true,
            data:[
                {
                    name: '品牌',
                    tagList:
                        ['华为(HUAWEI)', 'OPPO', '黑鲨', '一加', '三星', '小米(MI)', '荣耀', '魅族', 'Apple', '真我(realme)', '摩托罗拉', '联想', '中兴', '努比亚(nubia)', 'ROG'],
                    checked: undefined
                },
                {
                    name: '功能',
                    tagList: ['超大字体', '超大音量', 'SOS功能', '语音命令', '语音识别', '远程协助', '极简桌面模式'],
                    checked: undefined
                },
                {
                    name: '系统',
                    tagList: ['Android', 'EMUI 11.0', 'HarmoryOS2', 'IOS', '其他OS'],
                    checked: undefined
                },
                {
                    name: 'CPU',
                    tagList: ['骁龙855plus', '麒麟990', '麒麟990 5G', '骁龙 768G', 'Exynos980', 'MTK Hello G85', 'MT6873', '紫光展锐', '骁龙865plus', '天玑1000plus'],
                    checked: undefined
                }
            ]
        })
    }
}