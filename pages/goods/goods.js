// pages/goods/goods.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodSwiper: {
            dots: true,
            autoplay: true,
            circular: true,
            duration: 300,
            interval: 5000,
            activeColor: '#77D5F9',
            items: [
                'http://p8rk87lub.bkt.clouddn.com/6b3fd12f6c048ee88f51eb5dcaafaf51',
                'http://p8rk87lub.bkt.clouddn.com/9659b98e1f0b3a1a85405b3a6500b058',
                'http://p8rk87lub.bkt.clouddn.com/Fg9lbW6FlBTXvXaUhbC_RHLx9AzY',
                'http://p8rk87lub.bkt.clouddn.com/FgLrsAB91hhC4qVkA_4l4o5LGtZE'
            ]
        },
        goodsAppraise: [{}]
    },
    /**
     * 预览轮播图
     */
    onviewswiper(e) {
        const [index, swiper] = [e.currentTarget.dataset.index, this.data.goodSwiper];
        wx.previewImage({
            urls: swiper.items,
            current: swiper.items[index]
        })
    },
    /**
     * 返回首页
     */
    onbackhomepage() {
        wx.reLaunch({
            url: `/pages/index/index?id=2`,
        })
    },
    //选择商品参数
    onselectparams() {
        const animation = wx.createAnimation({
            duration: 300,
            timingFunction: 'ease',
        })
        animation.translateX('0').step()
        this.setData({
            animationData: animation.export()
        })
    },
    //关闭选择popup
    oncloseselect() {
        const animation = wx.createAnimation({
            duration: 300,
            timingFunction: 'ease',
        })
        animation.translateX('100%').step()
        this.setData({
            animationData: animation.export()
        })
    },
    //跳转评价页
    onlinktoappriase() {
        wx.navigateTo({
            url: `/pages/goodsAppraise/goodsAppraise`,
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
            title: `商品详情`
        });
        console.log(`获取商品详情?id=${this.options.goodsId}`)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function(options) {

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