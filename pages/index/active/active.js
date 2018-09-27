// pages/index/active/active.js
const app = getApp()
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
        currentPage: '',
        tabBodyHeight: 0,
        tabData: {
            options: {
                distance: '6.64rpx 18.4rpx',
                bold: true,
                current: 0
            },
            items: [{
                label: '精选活动',
                key: 'active'
            }, {
                label: '免租抽奖',
                key: 'award'
            }]
        },
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
    ready() {
        wx.setNavigationBarTitle({
            title: `圆点公寓`
        });
        //设置滚动区域高度
        app.tools.getViewHeight({
            target: '.tab-body-active',
            isComponent: true,
            component: this,
            success: height => {
                this.setData({
                    tabBodyHeight: height
                })
            }
        });
        (() => {
            //设置默认展示页
            const [o, c, d] = ['options', 'current', this.data.tabData]
            if (o in d && c in d[o]) {
                let i = d[o][c]
                if (typeof i === 'number') {
                    this.setData({
                        currentPage: d.items[i].key
                    })
                } else {
                    console.error(`this.tabData.options.current:${d[o][c]} must be a number`)
                }
            } else {
                this.setData({
                    currentPage: d.items[0].key
                })
            }
        })();
    },
    /**
     * 组件的方法列表
     */
    methods: {
        ontabchange(target) {
            const key = target.detail.item.key
            this.setData({
                currentPage: key
            })
        },
        emitpagescroll(e) {
            let Y = e.detail.scrollHeight - e.detail.scrollTop - this.data.tabBodyHeight
            const [direction, top, key] = [e.detail.deltaY, e.detail.scrollTop, 'active']
            this.triggerEvent('onpagescroll', {
                direction,
                Y,
                top,
                key
            })
        },
    }
})