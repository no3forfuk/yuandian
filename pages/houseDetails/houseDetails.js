// pages/houseDetails/houseDetails.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailSwiper: {
            dots: true,
            autoplay: true,
            circular: true,
            duration: 300,
            interval: 5000,
            activeColor: '#77D5F9',
            items: [{
                src: 'http://p8rk87lub.bkt.clouddn.com/6b3fd12f6c048ee88f51eb5dcaafaf51'
            }, {
                src: 'http://p8rk87lub.bkt.clouddn.com/9659b98e1f0b3a1a85405b3a6500b058'
            }, {
                src: 'http://p8rk87lub.bkt.clouddn.com/Fg9lbW6FlBTXvXaUhbC_RHLx9AzY'
            }, {
                src: 'http://p8rk87lub.bkt.clouddn.com/FgLrsAB91hhC4qVkA_4l4o5LGtZE'
            }]
        },
        houseContent: [{
            label: '位置:',
            text: '朝南'
        }, {
            label: '户型:',
            text: '一室一厅'
        }, {
            label: '面积:',
            text: '35.0平米'
        }, {
            label: '层高:',
            text: '3/6层'
        }],
        roomConfig: [{
            text: '网络'
        }, {
            text: '洗衣机'
        }, {
            text: '家具'
        }, {
            text: '冰箱'
        }, {
            text: '热水器'
        }, {
            text: '空调'
        }],
        hardwareData: [{
            imgUrl: '',
            text: '贴心管家',
        }, {
            imgUrl: '',
            text: '承诺必达',
        }, {
            imgUrl: '',
            text: '整洁如新',
        }, {
            imgUrl: '',
            text: '活动多多',
        }, ],
        likenessData: [{}, {}, {}, {}],
        isCollected: false
    },
    onpagescroll() {

    },
    toggleCollect() {
        this.setData({
            isCollected: !this.data.isCollected
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