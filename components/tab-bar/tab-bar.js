// components/tab-bar/tab-bar.js
const [opt] = ['options']
const default_style = {
    height: '90.5rpx',
    current: 0,
    style: `color:#808080;`,
    activeStyle: `color:#000;font-weight:bold;`
}
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabBarData: {
            type: Object,
            value: {},
            observer(n, o, c) {
                if (opt in n) {
                    Object.assign(default_style, n[opt])
                    this.setData({
                        style: default_style
                    })
                    //动画
                    if (n.show) {
                        const animation = wx.createAnimation({
                            duration: 300,
                            timingFunction: 'ease'
                        })
                        animation.translateY(0).step()
                        this.setData({
                            animationData: animation.export()
                        })
                    } else {
                        const animation = wx.createAnimation({
                            duration: 300,
                            timingFunction: 'ease'
                        })
                        animation.translateY('100%').step()
                        this.setData({
                            animationData: animation.export()
                        })
                    }
                } else {
                    this.setData({
                        style: default_style
                    })
                }
            }
        },
        childType: {
            type: String,
            value: 'col'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        style: {},
        animationData: {}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        ontapitem(e) {
            const dataset = e.currentTarget.dataset
            const style = this.data.style
            console.log(e)
            if (dataset.index === style.current) {
                return
            } else {
                style.current = dataset.index
                this.setData({
                    style
                })
                this.triggerEvent('change', dataset)
            }
        }
    }
})