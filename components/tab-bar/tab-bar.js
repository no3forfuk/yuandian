// components/tab-bar/tab-bar.js
const [opt] = ['options']
const default_style = {
    height: '90.5rpx'
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
        style: {}
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})