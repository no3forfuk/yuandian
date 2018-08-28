// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabData: {
            options: {
                distance: '6.64rpx 18.4rpx',
                bold: true
            },
            items: [{
                label: '精选活动',
            }, {
                label: '免租抽奖'
            }]
        },
        tabBarData: {
            items: [{
                label: '活动'
            }, {
                label: '圈子'
            }, {
                label: '商城'
            }, {
                label: '我的'
            }, ]
        }
    },
    /**
     * 切换tab
     */
    ontabchange(target) {
        console.log(target)
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