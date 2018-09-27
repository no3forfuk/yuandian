// components/tab/tab.js
const [opt] = ['options']
const default_style = {
    distance: '0 18.4rpx',
    span: '0 18.4rpx',
    color: '#808080',
    size: '14.67px',
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
        style: {},
        tabHeaderArray: [],
        markStyle: {
            width: 0,
            left: 0
        }
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
                this.setCurrentStyle(dataset.index)
                style.current = dataset.index
                this.setData({
                    style
                })
                this.triggerEvent('change', dataset)
            }
        },
        setCurrentStyle(index) {
            if (this.data.tabHeaderArray.length <= 0) {
                return
            } else {
                const [crtIndex, allItem] = [index, this.data.tabHeaderArray]
                this.setData({
                    markStyle: allItem[crtIndex]
                })
            }

        }
    },
    ready() {
        (() => {
            //设置标记span位置及样式
            const query = wx.createSelectorQuery().in(this)
            query.selectAll('.tab-header-item').boundingClientRect()
            query.exec(res => {
                if (!res[0]) {
                    return
                } else {
                    this.setData({
                        tabHeaderArray: res[0]
                    })
                    this.setCurrentStyle(this.data.style.current)
                }
            })
        })();
    }
})