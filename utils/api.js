const api = function(token) {
    const o_uri = 'http://api.rcm.ink'
    const n_uri = 'http://xcx.rcm.ink'

    function apis(data) {
        
        wx.request({
            url: data.url,
            data: data.params,
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success(res) {
                if (!data.success) return
                data.success(res.data)
            },
            fail(res) {
                console.log(res)
            }
        })
    }
    return {
        //登陆
        login(data) {
            return apis({
                url: n_uri + '/Login/xcxLogin',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //获取商品列表
        getGoodsList(data) {
            return apis({
                url: n_uri + '/Commodity/getCommodityList',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //获取圈子首页
        getCircelIndex(data) {
            return apis({
                url: o_uri + '/feed/index',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //获取post详情
        getPostDetails(data) {
            return apis({
                url: o_uri + '/feed/detail',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //获取个人信息
        getUserCenterInfo(data) {
            return apis({
                url: o_uri + '/user_info/get_user_detail',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //提交投诉建议
        submitComplain(data) {
            return apis({
                url: o_uri + '/feedback/add',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //获取家政服务类型
        getHouseWorkType(data) {
            return apis({
                url: o_uri + '/service/get_type',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //提交家政服务
        submitHouseWorkType(data) {
            return apis({
                url: o_uri + '/service/add',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //获取水电费列表
        getRentList(data) {
            return apis({
                url: o_uri + '/order/order_month_cost_list',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //获取房源浏览历史
        getHouseResouceViewHistory(data) {
            return apis({
                url: o_uri + '/house/get_view_log',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //获取房源列表
        getHouseResourcesList(data) {
            return apis({
                url: o_uri + '/house/get_list',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //收藏
        collect(data) {
            return apis({
                url: o_uri + '/common/with_focus',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        },
        //取消收藏
        discollect(data){
            return apis({
                url: o_uri + '/common/cancel_focus',
                params: data.params,
                success: res => {
                    if (!data.success) return
                    data.success(res)
                }
            })
        }
    }
}




module.exports = api