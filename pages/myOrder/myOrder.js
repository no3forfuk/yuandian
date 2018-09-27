// pages/myOrder/myOrder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        feeCurrent: 0,
        markStyle: {
            width: 0,
            left: 0
        },
        headerData: [{
            text: '待支付订单'
        }, {
            text: '已支付订单'
        }],
        paidData: [{}, {}, {}],
        unpaidData: [{}, {}, {}]
    },
    onchangefeetype(e) {
        this.setData({
            feeCurrent: e.currentTarget.dataset.index
        })
        this.setFeeMarkPosition()
        this.hidePayBtn()
    },
    onselectunpaiditem(e) {
        console.log('添加未支付项目')
    },
    ongopay() {
        wx.navigateTo({
            url: '/pages/comfirmOrder/comfirmOrder',
        })
    },
    setFeeMarkPosition() {
        const [idx] = [this.data.feeCurrent]
        const query = wx.createSelectorQuery()
        query.selectAll('.header-item-text').boundingClientRect()
        query.exec(res => {
            if (!res[0]) {
                return
            } else {
                this.setData({
                    markStyle: {
                        width: res[0][idx].width,
                        left: res[0][idx].left
                    }
                })
            }
        })
    },
    hidePayBtn() {
        var animation = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease',
        })
        if (this.data.feeCurrent == 0) {
            animation.translateY('0').step()
        } else {
            animation.translateY('100%').step()
        }

        this.setData({
            animationData: animation.export()
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.setTopBarText({
            text: '我的订单',
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
        this.setFeeMarkPosition()
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