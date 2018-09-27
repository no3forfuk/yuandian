// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        circelTab: {
            options: {
                distance: '6.64rpx 18.4rpx',
                bold: true,
                current: 0
            },
            items: [{
                label: '全部状态',
                key: 'all'
            }, {
                label: '我关注的',
                key: 'focused'
            }]
        },
        currentPage: 'active',
        tabBarData: {
            show: true,
            options: {
                current: 0
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
        const [key, index, tabBarData] = [target.detail.item.key, target.detail.index, this.data.tabBarData]
        tabBarData.options.current = index
        this.setData({
            currentPage: key,
            tabBarData
        })
    },
    /**
     * 页面滚动
     */
    pageScroll(e) {
        const [detail, tabBarData] = [e.detail, this.data.tabBarData]
        const idx = tabBarData.items.findIndex((v, i, a) => {
            return v.key === detail.key
        })
        tabBarData.options.current = idx
        if (detail.top < 50) {
            tabBarData.show = true
        } else {
            if (detail.direction > 0) {
                tabBarData.show = true
            } else {
                tabBarData.show = detail.Y > 50 ? false : true
            }
        }

        this.setData({
            tabBarData
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function() {

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
        // const [id, tabBarData] = ['id', this.data.tabBarData]
        // if (id in this.options) {
        //     tabBarData.options.current = parseInt(this.options[id])
        //     const key = tabBarData.items[this.options[id]].key
        //     this.setData({
        //         currentPage: key,
        //         tabBarData
        //     })
        // } else {

        // }
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