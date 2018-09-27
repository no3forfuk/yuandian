// pages/index/active/activity/activity.js、
const app = getApp()
const request = app.request
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
        classifyData: {
            items: [{
                label: '房质保证',
                imgUrl: 'http://p8rk87lub.bkt.clouddn.com/FiQM9bOA0lODz6TsCSujMf0etO63',
                key: 'quality'
            }, {
                label: '安全放心',
                imgUrl: 'http://p8rk87lub.bkt.clouddn.com/FiY3l6REereEJvHnfx8NtnyXUFx2',
                key: 'safe'
            }, {
                label: '信息保密',
                imgUrl: 'http://p8rk87lub.bkt.clouddn.com/FifUBvmlXIAeHUEwcUitUbMR_JXW',
                key: 'secret'
            }, {
                label: '管家7*24',
                imgUrl: 'http://p8rk87lub.bkt.clouddn.com/FiMYG1y386Exo4eyTCdkfS587NrZ',
                key: 'butler'
            }, ]
        },
        activing: []
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 获取进行中的活动列表
        
    },
    attached() {
        
    },
    ready() {

    },
})