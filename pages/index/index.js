//index.js
//获取应用实例
const app = getApp()
const { $Toast } = require('../../dist/base/index');
Page({
  data: {
    judgeIsUserLogin: false,
    isLogin: false,
  },
  onLoad: function () {
    this.setData({
      isLogin: wx.getStorageSync('uid')
    })
  },
  handleToLoginPage() {
    console.log("确定登陆")
    this.setData({
      judgeIsUserLogin: false
    })
  },
  handleCloseLoginDialog() {
    console.log("取消登陆")
    this.setData({
      judgeIsUserLogin: false
    })
    $Toast({
      content: '授权失败',
      type: 'error'
    });
  },
  userConcelAuthorization(e) {
    console.log(e.detail.judge)
    if (e.detail.judge) {
      console.log('登录成功')
     
    } else {
      console.log("取消登陆")
      $Toast({
        content: '授权失败',
        type: 'error'
      });
    }

    this.setData({
      isLogin: e.detail.judge
    })
    // this.setData({
    //   judgeIsUserLogin: true
    // })
    
  },
  toAuthenticatePage() {
    wx.navigateTo({
      url: '/pages/upload/index',
    })
  }
  // redirectTo // 销毁当前页面
  // navigateTo // 不销毁当前页面
  // switchTab // 调转tabBar中的组件
  // navigateBack // 返回页面
  // relaunch // 重新启动， 打开任意页面
  // wx.redirectTo({
  //   url: '/pages/home/index'
  // })
})
