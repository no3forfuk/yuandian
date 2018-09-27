// pages/post/post.js
const app = getApp()
const ajax = app.request
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputPaddingLeft: '',
        commentText: '',
        info: {
            name: '一个喜欢仙人掌的僧',
            id: 1,
            content: '人曾是僧，人弗能成佛',
            img: [0, 0, 0, 0],
            like: 10,
        }
    },
    oninputcomment(e) {
        const commentText = e.detail.value
        this.setData({
            commentText
        })
    },
    onsubmitcomment() {
        if (this.data.commentText.length > 0) {
            //提交评论
            console.log('提交评论')
        } else {
            return
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: `帖子详情`
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function(options) {
        const postId = this.options.postId
        const uId = wx.getStorageSync('u_id')
        ajax.getPostDetails({
            params: {
                feed_id: postId,
                uid: uId
            },
            success: res => {
                console.log(res)
            }
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