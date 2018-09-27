// pages/index/mine/mine.js

const app = getApp()
const request = app.request
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        operateData: [{
            imgSrc: '',
            label: '一键开锁'
        }, {
            imgSrc: '',
            label: '退出登陆'
        }],
        renterData: [{
            imgSrc: '',
            label: '全部房源',
            href: '/pages/allResources/allResources'
        }, {
            imgSrc: '',
            label: '收藏房源',
            href: '/pages/houseResources/houseResources'
        }, {
            imgSrc: '',
            label: '我的订单',
            href: '/pages/myOrder/myOrder'
        }, {
            imgSrc: '',
            label: '浏览历史',
            href: '/pages/viewHistory/viewHistory'
        }],
        landlordData: [{
            imgSrc: '',
            label: '房租水电',
            href: '/pages/rent/rent'
        }, {
            imgSrc: '',
            label: '家政服务',
            href: '/pages/homemaking/homemaking'
        }, {
            imgSrc: '',
            label: '投诉建议',
            href: '/pages/complain/complain'
        }]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //页面滚动
        emitpagescroll(e) {
            const system = wx.getStorageSync('system')
            let Y = e.detail.scrollHeight - e.detail.scrollTop - system.windowHeight
            const [direction, top, key] = [e.detail.deltaY, e.detail.scrollTop, 'mine']
            this.triggerEvent('onpagescroll', {
                direction,
                Y,
                top,
                key
            })
        },
        //跳转之前
        onlinkbefore(e) {
            const target = e.currentTarget.dataset.target
            wx.setNavigationBarTitle({
                title: target
            })
        }
    },
    ready() {
        wx.setNavigationBarTitle({
            title: `个人中心`
        });
    },
    attached() {

    }
})