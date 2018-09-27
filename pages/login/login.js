// pages/login/login.js
const app = getApp()
const ajax = getApp().request
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    getInfo(res) {
        const iv = res.detail.iv;
        const encryptedData = res.detail.encryptedData
        wx.login({
            success: lres => {
                const code = lres.code
                let params = {
                    code,
                    iv,
                    encryptedData,
                }
                ajax.login({
                    params: params,
                    success: ares => {
                        wx.setStorageSync('u_id', ares.data.user_id)
                        console.log(ares)
                        wx.reLaunch({
                            url: '/pages/index/index',
                        })
                    }
                })
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