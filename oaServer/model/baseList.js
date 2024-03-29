/**
 * Created by lee on 2020.
 */
const db = require('../utils/database');
let accountBase = db.model("accountBase", {
    code: String,
    status: String, // 1 已使用 0 未使用
    special: String,
    type: String, // 1 用户 2 群聊
    random: Number
});
let users = db.model("users", { // Schema
    name: {type: String, unique: true},
    pass: String,
    code: {type: String, unique: true}, // 唯一的code
    photo: {type: String, default: '/img/pic1.jpg'}, // 默认头像
    signature: { type: String, default: '这个人暂时还没有签名！' },
    nickname: { type: String, default: ''},
    email: { type: String, default: '' },
    province: { type: Object, default: {name: "广东省", value: "110000"} }, // 省
    city: { type: Object, default: {name: "广州市", value: "110100"} }, // 市
    town: { type: Object, default: {name: "番禺区", value: "110108"} }, // 县
    sex: { type: String, default: '3' }, // 0 男 1 女 3 保密
    bubble: { type: String, default: 'dibai' }, // 聊天的气泡（如qq的气泡）
    chatColor: { type: String, default: '#ffffff' }, // 聊天文字颜色
    bgOpa: { type: Number, default: 0.2 }, // 聊天框透明度
    projectTheme: { type: String, default: 'dibai' }, // 项目主题
    wallpaper: { type: String, default: '/img/oa_office.jpg' }, // 聊天壁纸
    signUpTime: { type: Date, default: Date.now() }, // 注册时间
    lastLoginTime: { type: Date, default: Date.now() }, // 最后一次登录
    conversationsList: Array, // 会话列表 * name 会话名称 * photo 会话头像 * id 会话id * type 会话类型 group/ frend
    cover: { type: Array, default: ['/img/pic2.jpg', '/img/timg-52.jpg'] }, // 封面展示
    emoji: Array // 表情包
});
module.exports = {
    accountBase,
    users
};