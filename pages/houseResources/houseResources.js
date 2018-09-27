// pages/houseResources/houseResources.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabBarData: {
            show: true,
            options: {
                current: 3
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
        },
        resourcesData: [{
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, {
            name: '屋企公寓',
            keywords: '短租公寓 | 压一付二',
            price: 2700,
            img: 'http://p8rk87lub.bkt.clouddn.com/009049a904fb321391de59a1c9157b30'
        }, ]
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
    onpagescroll(e) {
        const [detail, tabBarData] = [e.detail, this.data.tabBarData]
        const system = wx.getStorageSync('system')
        let Y = detail.scrollHeight - detail.scrollTop - system.windowHeight
        if (detail.deltaY < 0) { //向下
            tabBarData.show = Y > 50 ? false : true
        } else { //向上
            tabBarData.show = true
        }
        this.setData({
            tabBarData
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.setTopBarText({
            text: '收藏房源',
        })
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