/*Created By Jsir on 2018/7/26*/
'use strict'
import api from './utils/api.js'
import tools from './utils/tools.js'
App({
    onLaunch() {
        const sys = wx.getSystemInfoSync();
        wx.setStorageSync('system', sys)
        if (wx.getStorageSync('u_id')) {
            wx.reLaunch({
                url: '/pages/index/index',
            })
        } else {
            wx.reLaunch({
                url: '/pages/login/login',
            })
        }
    },
    request: api(),
    tools: tools
})