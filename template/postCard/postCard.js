// template/postCard/postCard.js

const default_data = {
    name: '一个喜欢仙人掌的僧',
    id: 1,
    content: '人曾是僧，人弗能成佛',
    img: [0, 0, 0, 0],
    like: 10,
    comment: 20,
    hotComment: {
        user: '一个喜欢敲木鱼的婢',
        content: '女卑是婢，女又何为奴'
    }
}

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        postInfo: {
            type: Object,
            value: null,
            observer(n, o, c) {
                if (n) {
                    // console.log(n)
                    this.setData({
                        info: n
                    })
                }
            }
        },
        user: {
            type: Object,
            value: null,
            observer(n, o, c) {
                if (n && n.id) {
                    this.setData({
                        user: n
                    })
                } else {

                }
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        info: {},
        user: {}
    },
    ready() {

    },
    /**
     * 组件的方法列表
     */
    methods: {
        linkToPost(e) {
            const id = e.currentTarget.dataset.id
            wx.navigateTo({
                url: `/pages/post/post?postId=${id}`,
            })
        },
        onlinktouser(e) {
            const len = getCurrentPages().length
            const currentPage = getCurrentPages()[len - 1]
            if (currentPage.route == 'pages/user/user') return
            const id = e.currentTarget.dataset.id
            wx.navigateTo({
                url: `/pages/user/user?oid=${id}`,
            })
        },
        onviewimg(e) {
            const [index, imgList] = [e.currentTarget.dataset.index, this.data.info.data.atlas_list]
            const arr = []
            for (var i = 0; i < imgList.length; i++) {
                arr.push(imgList[i].image_path)
            }
            wx.previewImage({
                current: arr[index],
                urls: arr
            })
        },
    }
})