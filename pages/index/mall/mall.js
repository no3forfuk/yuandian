// pages/index/mall/mall.js
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
                label: '圆点商城',
                key: 'mall'
            }, {
                label: '浏览过的',
                key: 'visited'
            }]
        },
        tabBodyHeight: 0
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
            const [direction, top, key] = [e.detail.deltaY, e.detail.scrollTop, 'mall']
            this.triggerEvent('onpagescroll', {
                direction,
                Y,
                top,
                key
            })
        }
    },
    ready() {
        wx.setNavigationBarTitle({
            title: `我的·圆点社区`
        });
        // 默认展示页必须在设置高度之前
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
        (() => {
            //设置滚动区域高度
            const system = wx.getSystemInfoSync()
            const query = wx.createSelectorQuery().in(this)
            query.select('.tab-body-mall').boundingClientRect()
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
        
    }
})