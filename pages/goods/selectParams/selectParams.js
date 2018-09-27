// pages/goods/selectParams/selectParams.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // paramData: {
        //     type: Array,
        //     value: [],
        //     observer(n, o, c) {

        //     }
        // }
    },

    /**
     * 组件的初始数据
     */
    data: {
        paramData: [{
            label: '选择款式',
            items: [{
                text: '弯头',
                stock: true
            }, {
                text: '直头',
                stock: true
            }, ]
        }, {
            label: '选择尺寸',
            items: [{
                text: 'S',
                stock: true
            }, {
                text: 'XL',
                stock: false
            }, ]
        }, {
            label: '选择颜色',
            items: [{
                text: '大黄',
                stock: false
            }, {
                text: '小黄',
                stock: true
            }, ]
        }],
        defaultSelect: [0, 0, 1]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        emitclose() {
            this.triggerEvent('emitcloseselect')
        },
        onselected(e) {
            const dataset = e.currentTarget.dataset
            if (!dataset.have) {
                wx.showModal({
                    content: '该型号产品暂时没有库存',
                    showCancel: false
                })
            } else {
                const [index, idx, defaultSelect] = [dataset.index, dataset.idx, this.data.defaultSelect]
                defaultSelect[index] = idx
                this.setData({
                    defaultSelect: defaultSelect
                })
            }
        }
    }
})