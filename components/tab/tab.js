// components/tab/tab.js
const [opt] = ['options']
const default_style = {
    distance: '0 18.4rpx',
    span: '0 18.4rpx',
    color: '#808080',
    size: '26.55rpx',
    bold: false,
    activeColor: '#2C85F4',
    current: 0
}
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabData: {
            type: Object,
            value: {},
            observer(n, o, c) {
                if (opt in n) {
                    Object.assign(default_style, n[opt])
                    this.setData({
                        style: default_style
                    })
                } else {
                    this.setData({
                        style: default_style
                    })
                }
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        style: {}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        ontapitem(e) {
            const dataset = e.currentTarget.dataset
            const style = this.data.style
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