// pages/user/user.js
const app = getApp()
const ajax = app.request
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabBarData: {
            show: true,
            options: {
                current: 1
            },
            items: [{
                label: '活动',
                key: 'active'
            }, {
                label: '圈子',
                key: 'circle'
            }, {
                label: '商城',
                key: 'mall'
            }, {
                label: '我的',
                key: 'mine'
            }, ]
        }
    },
    /**
     * 切换tabbar
     */
    ontabbarchange(target) {
        const [index, tabBarData] = [target.detail.index, this.data.tabBarData]
        tabBarData.options.current = index
        this.setData({
            tabBarData
        })
        wx.reLaunch({
            url: `/pages/index/index?id=${index}`,
        })
    },
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
    //查看头像大图
    onviewavatar() {
        const img = this.data.userInfo.avatar
        wx.previewImage({
            current: img,
            urls: [img]
        })
    },
    //获取个人中心信息
    getUserInfo() {
        const oid = this.options.oid
        const uid = wx.getStorageSync('u_id')
        ajax.getUserCenterInfo({
            params: {
                get_uid: oid,
                uid: uid
            },
            success: res => {
                console.log(res)
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        wx.setNavigationBarTitle({
            title: `个人信息`
        });
        console.log(this.options)
        this.getUserInfo()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})