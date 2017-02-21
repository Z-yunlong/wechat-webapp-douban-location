App({
    globalData: {
        userInfo: null,
        latitude: null,
        longitude: null,
        locs: null,
        city: null,
        reflesh: false,
        locId: null,
        doubanBase: "https://api.douban.com",
        loc_list: "/v2/loc/list",
        loc: "/v2/loc/",
        event_list: "/v2/event/list"
    },
    onLaunch: function () {
        // Do something initial when launch.
    },
    onShow: function () {
        // Do something when show.
    },
    onHide: function () {
        // Do something when hide.
    },
    onError: function (msg) {
        console.log(msg)
    },
    getUserInfo: function (cb) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo);
        } else {
            wx.login({
                success: function (res) {
                    wx.getUserInfo({
                        success: function (res) {
                            that.globalData.userInfo = res.userInfo;
                            typeof cb == "function" && cb(that.globalData.userInfo);
                        }
                    });
                }
            });
        }
    },
    getLocation: function () {
        var that = this;
        wx.getLocation({
            type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
            success: function (res) {
                that.globalData.latitude = res.latitude;
                that.globalData.longitude = res.longitude;
            }
        })
    },

})