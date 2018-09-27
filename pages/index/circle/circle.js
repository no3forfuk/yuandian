// pages/index/circle/circle.js
const app = getApp()
const ajax = app.request
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        tabData: {
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
        tabBodyHeight: 0,
        postList: [],
        scrollCurrent: 0,
        scrollRightBorder: 0,
        scrollleftBorder: 0,
        opacityBorder: 0,
        userItemWidth: 0,
        firstItemOpacity: 1,
        itemOpacity: 1,
        hotUser: [{
            index: 0
        }, {
            index: 1
        }, {
            index: 2
        }, {
            index: 3
        }, {
            index: 4
        }, {
            index: 5
        }, {
            index: 6
        }, {
            index: 7
        }, {
            index: 8
        }, {
            index: 9
        }, {
            index: 10
        }, {
            index: 11
        }, {
            index: 12
        }, {
            index: 13
        }, {
            index: 14
        }, {
            index: 15
        }, {
            index: 16
        }, {
            index: 17
        }]
    },
    /**
     * 组件的方法列表
     */
    methods: {
        getCircelIndex() {
            const u_id = wx.getStorageSync('u_id')
            ajax.getCircelIndex({
                params: {
                    uid: u_id
                },
                success: res => {
                    let arr = res.result_data.result
                    arr = arr.filter(item => item.type == 1)
                    this.setData({
                        postList: arr
                    })
                }
            })
        },
        ontabchange(target) {
            const key = target.detail.item.key
            this.setData({
                currentPage: key
            })
        },
        onaddpost() {
            wx.navigateTo({
                url: `/pages/addPost/addPost`,
            })
        },
        onscrollhotuser(e) {
            const opacityBorder = this.data.opacityBorder
            const scrollLeft = e.detail.scrollLeft
            const scrollWidth = e.detail.scrollWidth
            const index = this.data.scrollCurrent
            const query = wx.createSelectorQuery().in(this)
            const dirction = e.detail.deltaX
            query.selectAll('.circle-header-item').boundingClientRect()
            if (dirction < 0) { //左滑
                query.exec(res => {
                    if (res[0][index].left > opacityBorder) {

                    } else {
                        const border = scrollLeft / res[0][index].width - index
                        if (border > 0.4) {
                            this.setData({
                                scrollCurrent: parseInt(scrollLeft / res[0][index].width) + 1,
                                itemOpacity: 0
                            })
                        }

                    }
                })
            } else { //右滑
            }
            // query.exec(res => {
            //     this.setData({
            //         scrollCurrent: parseInt(scrollLeft / res[0][index].width) + 1,
            //         itemOpacity: 0
            //     })
            // })
        },
        //获取全部动态
        emitpagescroll(e) {
            let Y = e.detail.scrollHeight - e.detail.scrollTop - this.data.tabBodyHeight
            const [direction, top, key] = [e.detail.deltaY, e.detail.scrollTop, 'circle']
            this.triggerEvent('onpagescroll', {
                direction,
                Y,
                top,
                key
            })
        },
    },
    ready() {
        wx.setNavigationBarTitle({
            title: `圈子·圆点社区`
        });
        (() => {
            //设置滚动区域高度
            const system = wx.getStorageSync('system')
            const query = wx.createSelectorQuery().in(this)
            query.select('.circle-page').boundingClientRect()
            query.exec(res => {
                if (!res[0]) {
                    return
                } else {
                    const [_top, wHeight] = [res[0].top, system.windowHeight]
                    this.setData({
                        tabBodyHeight: wHeight - _top
                    })
                }
            })
        })();
        (() => {
            //获取头像滚动范围
            const query = wx.createSelectorQuery().in(this)
            query.select('.circle-header-first-item-box').boundingClientRect()
            query.exec(res => {
                const [left, width] = [res[0].left, res[0].width]
                this.setData({
                    scrollRightBorder: left + width / 2,
                    scrollleftBorder: left + 5,
                    opacityBorder: left + width,
                    userItemWidth: width
                })
            })
        })();
        (() => {
            //获取首页数据
            this.getCircelIndex()
        })();
    },
    attached() {

    }
})