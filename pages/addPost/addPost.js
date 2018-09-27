// pages/addPost/addPost.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        postImgList: [],
        postText: ''
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
            title: `发布帖子`
        })
    },
    onchooseimg() {
        wx.chooseImage({
            count: 4,
            success: res => {
                let postImgList = this.data.postImgList
                postImgList = [...postImgList, ...res.tempFiles]
                if (postImgList.length > 4) {

                } else {
                    this.setData({
                        postImgList
                    })
                }
            },
        })
    },
    oncancel() {
        wx.navigateBack({
            delta: 1
        })
    },
    oncomfirm() {
        const imgArr = this.data.postImgList
        const postText = this.data.postText
        if (imgArr.length === 0 && postText.length === 0) {
            return
        } else {
            wx.showLoading({
                title: '发布中...',
                mask: true
            })
            setTimeout(() => {
                wx.hideToast()
                wx.reLaunch({
                    url: '/pages/index/index?id=1',
                })
            }, 1000)
        }
    },
    oninputtext(e) {
        const postText = e.detail.value
        this.setData({
            postText
        })
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